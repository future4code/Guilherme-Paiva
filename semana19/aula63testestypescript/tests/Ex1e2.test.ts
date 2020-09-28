import { performPurchase, User } from "../src/Ex1e2"

test("Testando saldo maior que valor de compra", () => {
	const user: User = {
		name: "Astrodev",
		balance: 100
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 50
	})
})

test("Testando saldo igual ao valor de compra", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

test("Testando saldo menor que valor de compra", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 100)
	
	expect(result).toEqual(undefined)
})