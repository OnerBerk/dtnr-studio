import type { PricingOffer } from "@/lib/types";

const cellClassName = "border-2 border-heading p-3 text-center font-medium";

type OffersTableProps = {
  offers: readonly PricingOffer[];
};

export function OffersTable({ offers }: OffersTableProps) {
  return (
    <table
      className="
        w-full border-collapse text-xl md:text-2xl
      "
    >
      <caption className="sr-only">
        Tableau comparatif des formules et tarifs DTNR Studio
      </caption>
      <thead className="sr-only">
        <tr>
          <th scope="col">Formule</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {offers.map((offer) => (
          <tr key={offer.name}>
            <th
              scope="row"
              className={`
                ${cellClassName}
                w-[28%] whitespace-pre-line
              `}
            >
              {offer.name}
            </th>
            <td className={cellClassName}>{offer.description}</td>
            <td className={cellClassName}>Choisir</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
