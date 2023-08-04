import { expect, test} from "vitest";
import { easyFetch } from './fetch';

// 测试easyFetch get方法
test('easyFetch.get', async() => {
  await expect(easyFetch.get("https://api.github.com/users/Naxisigut")).resolves.toHaveProperty('name', 'LiDiDi')
})