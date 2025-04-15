import { Objectvalidation } from "./ObjectValidation"

describe('CLASS ObjectValidation [Module: CORE]', () => {
	// - C O N S T R U C T I O N   P H A S E
	describe('Functionality Phase', () => {
		it('nullness: validate an object is null', () => {
			expect ( Objectvalidation.isNotNull(null)).toBeFalsy()
		})
	})
})
