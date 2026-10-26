export type Expr = Column[];
export type Column = Entry[];
export type Entry = { value: number; height: Expr };

export type ExprData<T extends object> = ColumnData<T>[];
export type ColumnData<T extends object> = EntryData<T>[];
export type EntryData<T extends object> = T & { height: ExprData<T> };

export type Height = ExprData<{ value: number; mark: boolean }>;
export type Vertical = Height[];

export const INFINITY: Expr = Infinity as any;
export const INFINITY_height: Height = Infinity as any;

export function is_infinity(e: Expr | Height): boolean {
    return e === INFINITY;
}

export function infinity_FS(index: number): Expr {
    if (index === 0) return [[]];
    let col: Column = [{ value: index - 1, height: [] }];
    for (let i = index - 1; i > 0; i--) {
        col = [{ value: i - 1, height: [col] }];
    }
    return [[], col];
}

export function to_height(e: Expr, r: number): Height {
    const result: Height = [];

    for (let i = 0; i < e.length; i++) {
        const col = e[i];

        const result_col: Height[number] = [];

        for (const entry of col) {
            const p = entry.value;
            let mark: boolean, value: number;
            if (p < r) {
                [mark, value] = [false, p];
            } else {
                [mark, value] = [true, p - r];
            }
            result_col.push({
                mark,
                value,
                height: to_height(entry.height, r),
            });
        }

        result.push(result_col);
    }

    return result;
}

export function from_height(h: Height, r: number): Expr {
    const result: Expr = [];

    for (let i = 0; i < h.length; i++) {
        const col = h[i];

        const result_col: Column = [];

        for (const entry of col) {
            const { mark, value } = entry;
            result_col.push({
                value: value + (mark ? r : 0),
                height: from_height(entry.height, r),
            });
        }

        result.push(result_col);
    }

    return result;
}

export function height_compare(a: Height, b: Height): number {
    if (is_infinity(a) || is_infinity(b)) return boolean_compare(is_infinity(a), is_infinity(b));
    return lex_compare(a, b, lex_compare_by(height_entry_comparator));
}

const height_entry_comparator = object_lex_compare_by(
    { mark: boolean_compare, value: number_compare, height: height_compare },
    ['mark', 'value', 'height'],
);

export function vertical_compare(a: Vertical, b: Vertical): number {
    return lex_compare(a, b, height_compare);
}

export function has_next_layer<T extends object>(expr: ExprData<T>): boolean {
    const right = expr.length - 1;
    if (right === -1) return false;
    const top = expr[right].length - 1;
    return top !== -1;
}

export function next_layer<T extends object>(expr: ExprData<T>): ExprData<T> {
    const right = expr.length - 1;
    const top = expr[right].length - 1;
    return expr[right][top].height;
}

export function skip_layers<T extends object>(expr: ExprData<T>, l: number): ExprData<T> {
    for (let i = 0; i < l; i++) expr = next_layer(expr);
    return expr;
}

export function tail_layer(expr: Expr): number {
    if (!has_next_layer(expr)) return -1;
    return 1 + tail_layer(next_layer(expr));
}

export function tail(expr: Expr, t_layer: number): number {
    let current_left = 0;
    let current = expr;
    for (let i = 0; i < t_layer; i++) {
        current_left += current.length;
        current = next_layer(current);
    }
    return current_left + current.length - 1;
}

export function root(expr: Expr, t_layer: number): number {
    const current = skip_layers(expr, t_layer);
    return current[current.length - 1][current[current.length - 1].length - 1].value;
}

export function root_layer(expr: Expr, r: number): [l: number, ri: number] {
    let current = expr;
    let current_left = 0;
    let current_layer = 0;
    while (true) {
        if (r < current_left + current.length) {
            return [current_layer, r - current_left];
        }
        current_left += current.length;
        current = next_layer(current);
        current_layer++;
    }
}

function ascend_replace(expr: Expr, r: number, diff: number, t_layer: number | undefined, new_tail: Expr): Expr {
    let result: Expr = [];

    for (let i = 0; i < expr.length; i++) {
        if (t_layer === 0 && i === expr.length - 1) {
            result.push(...new_tail);
        } else {
            const col = expr[i];
            let result_col: Column = [];
            for (let j = 0; j < col.length; j++) {
                const entry = col[j];
                const new_t_layer =
                    t_layer !== undefined && i === expr.length - 1 && j === col.length - 1 ? t_layer - 1 : undefined;
                result_col.push({
                    value: entry.value >= r ? entry.value + diff : entry.value,
                    height: ascend_replace(entry.height, r, diff, new_t_layer, new_tail),
                });
            }
            result.push(result_col);
        }
    }

    return result;
}

export function is_special(expr: Expr, t_layer: number): boolean {
    if (t_layer === 0) return false;
    let current = expr;
    let current_left = 0;
    for (let i = 0; i < t_layer; i++) {
        current_left += current.length;
        current = next_layer(current);
    }
    if (current[current.length - 1].length !== 1) return false;
    const entry = current[current.length - 1][0];
    return entry.height.length === 0 && entry.value === current_left - 1;
}

export function expand_special(expr: Expr, t_layer: number, index: number): Expr {
    let result = expr.slice(0, -1);
    let col = expr[expr.length - 1];
    let result_col = col.slice(0, -1);
    let entry = col[col.length - 1];
    if (t_layer > 1) {
        let new_entry = {
            value: entry.value,
            height: expand_special(entry.height, t_layer - 1, index),
        };
        result_col.push(new_entry);
    } else {
        let new_entry = {
            value: entry.value,
            height: entry.height.slice(0, -1),
        };
        if (result_col.length === 0) result_col.push(new_entry);
        result_col.push(...Array<Entry>(index).fill(new_entry));
    }
    result.push(result_col);
    return result;
}

export function root_appending_start(col_root: Column, r: number, col_tail: Column, t: number): number {
    let heights_root = col_root.map(({ height }) => to_height(height, r));
    let heights_tail = col_tail.slice(0, -1).map(({ height }) => to_height(height, t));
    let ir = 0,
        it = 0;
    while (ir !== heights_root.length && it !== heights_tail.length) {
        const cmp = height_compare(heights_root[ir], heights_tail[it]);
        if (cmp >= 0) it++;
        if (cmp <= 0) ir++;
    }
    return ir;
}

export function is_limit(expr: Expr): boolean {
    return is_infinity(expr) || (expr.length > 0 && expr[expr.length - 1].length > 0);
}

function FS(expr: Expr, index: number): Expr {
    if (is_infinity(expr)) return infinity_FS(index);
    if (expr.length === 0) return expr;
    const t_layer = tail_layer(expr);
    if (t_layer < 0) return expr.slice(0, -1);

    if (is_special(expr, t_layer)) {
        return expand_special(expr, t_layer, index);
    }

    const t = tail(expr, t_layer);
    const r = root(expr, t_layer);
    const [r_layer, ri] = root_layer(expr, r);

    const expr_root = skip_layers(expr, r_layer);
    const col_root = expr_root[ri];
    const expr_tail = skip_layers(expr_root, t_layer - r_layer);
    const col_tail = expr_tail[expr_tail.length - 1];

    const appending = root_appending_start(col_root, r, col_tail, t);

    let new_tail: Expr = [];

    for (let j = index; j >= 1; j--) {
        if (ri !== expr_root.length - 1) {
            let new_tail_1 = ascend_replace(expr_root.slice(ri + 1), r, j * (t - r), t_layer - r_layer, new_tail);
            let new_col = ascend_replace([col_tail.slice(0, -1)], r, (j - 1) * (t - r), undefined, [])[0];
            for (let k = appending; k < col_root.length; k++) {
                new_col.push({
                    value: col_root[k].value,
                    height: ascend_replace(col_root[k].height, r, j * (t - r), undefined, []),
                });
            }
            new_tail = [new_col, ...new_tail_1];
        } else {
            if (appending === col_root.length) throw new Error('Illegal state');
            let new_col = ascend_replace([col_tail.slice(0, -1)], r, (j - 1) * (t - r), undefined, [])[0];
            for (let k = appending; k < col_root.length; k++) {
                new_col.push({
                    value: col_root[k].value,
                    height: ascend_replace(
                        col_root[k].height,
                        r,
                        j * (t - r),
                        k === col_root.length - 1 ? t_layer - r_layer - 1 : undefined,
                        new_tail,
                    ),
                });
            }
            new_tail = [new_col];
        }
    }

    return ascend_replace(expr, 0, 0, t_layer, new_tail);
}

