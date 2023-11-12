export type Ingredient = {
	name: string;
	amount: string;
	unit: string;
};
export interface Recipe {
	title: string;
	ingredients: Ingredient[];
	description: string;
	flavours: string[];
}
