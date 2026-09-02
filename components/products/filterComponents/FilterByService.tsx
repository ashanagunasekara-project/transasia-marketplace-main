"use client";

const services = [
  { id: 1, label: "Free Delivery", icon: "fa-truck-fast" },
  { id: 2, label: "Hot Deals", icon: "fa-stars" },
  { id: 3, label: "Authentic Brands", icon: "fa-badge-check" },
  { id: 4, label: "Cash On Delivery", icon: "fa-money-bill" },
  { id: 5, label: "Installment", icon: "fa-calendar-days" },
];

export default function FilterByService({
  selectedItems,
  onChange,
}: {
  selectedItems: string[];
  onChange: (value: string) => void;
}) {
  const toggleService = (label: string) => {
    onChange(label);
  };

  return (
    <>
      {services.map((service) => {
        const isActive = selectedItems.includes(service.label);
        return (
          <a
            key={service.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleService(service.label);
            }}
            className={` ${isActive ? "active" : ""}`}
          >
            {service.label}
            <i className={`fa-regular ${service.icon}`} />
          </a>
        );
      })}
    </>
  );
}
