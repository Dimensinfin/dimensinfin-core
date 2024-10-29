export class Objects {
	public isNotNull(target: any): boolean {
		if (null == target) return false
		if (target instanceof String) if ("" == target) return false
		if (target instanceof Array) if (0 == target.length) return true
		return true
	}
}
