import { useSelector } from "react-redux";

const ItemNav = ({ active, setActive }) => {
  const currentItems = useSelector((state) => state.currentItems);

  const filteredTitles = currentItems.categories.filter((t) =>
    currentItems.items.some((item) => item.category === t.id)
  );
  

  return (
    <div className="item-nav-wrapper">
      <ul>
        {filteredTitles.map((t) => (
          <a
            key={t.id}
            href={`#title-${t.id}`}
            className={t.id === active.id ? "active" : ""}
            onClick={() => setActive(t)}
          >
            {t.name}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default ItemNav;
