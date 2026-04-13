import {create} from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create((set) => ({
    user: null,
    setUser: (userData) => set(()=>({ user: userData })),
    clearUser: () => set({ user: null }),
})
)

export {useAuthStore};