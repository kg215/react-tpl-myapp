import { fetchTest } from "../services/test";

export default {
  state: {
    data: {},
  },
  reducers: {
    update: (state, payload) => ({ ...state, ...payload }),
  },
  effects: (_) => ({
    async getData() {
      const data = await fetchTest();
      await this.update({ data });
    },
  }),
}