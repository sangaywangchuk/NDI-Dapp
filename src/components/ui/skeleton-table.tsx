import { Skeleton } from "./skeleton";

export default function SkeletonTable({
  row = 4,
  column = 5
}: {row?: number, column?: number}) {
  return (
    <>
      {Array.from({ length: row }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({ length: column }).map((_, colIndex) => (
            <td key={colIndex} className="p-2">
              <Skeleton className="h-8 w-full" />
              {/* Adjust height/width for skeleton cells */}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
