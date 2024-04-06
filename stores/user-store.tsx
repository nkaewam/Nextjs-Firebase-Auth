import { User } from "firebase/auth";
import { create } from "zustand";

// export const useUser = () => {
//   const [user, setUser] = useState<User>();
//   const [isUserLoading, setIsUserLoading] = useState(false);

//   return {
//     user,
//     isUserLoading,
//     setUser,
//     setIsUserLoading,
//   };
// };

type Store = {
  user?: User;
  isUserLoading: boolean;
  setUser: (user: User) => void;
  setIsUserLoading: (loading: boolean) => void;
};

export const useUserStore = create<Store>((set) => ({
  isUserLoading: false,
  setUser: (user) => set({ user }),
  setIsUserLoading: (isUserLoading) => set({ isUserLoading }),
}));
