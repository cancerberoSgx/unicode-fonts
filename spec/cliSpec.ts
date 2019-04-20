import { cat, config } from 'shelljs';
import { exec0 } from './testUtil';

xdescribe('CLI', () => {

	describe('run', () => {

		// initializeProject1('beforeEach')

		it('run on yamat project if there are no errors must run for all projects', () => {

			const p = exec0(`cd project1 && npm i --save-dev .. && npx yamat run 'echo "hello123"'`)
			expect(p.stdout.split('hello123').length).toBeGreaterThanOrEqual(3)
		})

		it('run --breakOnError true --exitOnError false', () => {
			const p = exec0(`cd project1 && npm i --save-dev ..  && npx yamat --breakOnError true --exitOnError false run echo "hello99" && exit 1`, false)
			// expect(p.stdout.split('hello123').length).toBeLessThanOrEqual(2)
			expect(p.code).toBe(1)
		})
	})
})
