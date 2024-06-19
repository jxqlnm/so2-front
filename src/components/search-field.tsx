import { Search } from "lucide-react";

interface SearchFieldProps {
  handleSearch: Function;
}

export function SearchField(props: SearchFieldProps) {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2 w-60">
        <input
          onChange={(e) => props.handleSearch(e)}
          type="text"
          className="grow"
          placeholder="Pesquisar"
        />
        <Search />
      </label>
    </>
  );
}
