declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: string
			DB_HOST: string
		}
	}
}

export { }
