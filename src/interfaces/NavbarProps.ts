import { Dispatch, SetStateAction } from "react";

export interface NavbarProps {
    search: string | null;
    setSearch: Dispatch<SetStateAction<string | null>>;
}
