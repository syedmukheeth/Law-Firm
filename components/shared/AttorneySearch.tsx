"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { AttorneyCard } from "@/components/shared/AttorneyCard";
import type { Attorney } from "@/lib/data/types";

export function AttorneySearch({ items }: { items: Attorney[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (attorney) =>
        attorney.name.toLowerCase().includes(q) ||
        attorney.specialization.toLowerCase().includes(q)
    );
  }, [items, query]);

  return (
    <div>
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search attorneys..."
          className="pl-11"
        />
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((attorney) => (
          <AttorneyCard key={attorney.slug} attorney={attorney} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-foreground-muted">No results match your search.</p>
      ) : null}
    </div>
  );
}
