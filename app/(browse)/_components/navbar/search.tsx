"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = queryString.stringifyUrl(
      {
        url: "/search",
        query: { term: value },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  const Clear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full relative lg:w-[400px] flex items-center"
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      <Button
        type="submit"
        size="sm"
        variant="secondary"
        className="rounded-l-none"
      >
        {value && (
          <X
            onClick={Clear}
            className="h-5 w-5 absolute top-2.5 right-14 text-muted-foreground cursor-pointer transition hover:opacity-75"
          />
        )}
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
};

export default Search;
