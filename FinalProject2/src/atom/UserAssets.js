import { atom, selector } from "recoil";

export const allUserAssets = selector({
  key: "allUserAssets",
  get: async () => {
    // Fetch or compute the user assets here
    return [{ id: 'bitcoin' }];
  },
});

export const userAsset = atom({
  key: "userAsset",
  default: allUserAssets,
});