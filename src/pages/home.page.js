import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { InView } from "react-intersection-observer";
import Cart from "../components/cart.component";

import Item from "../components/item.component";
import ItemNav from "../components/itemNav.component";

import {
  updateCurrentRestaurantAction,
  updateCurrentItemAction,
  updateCartItemsAction,
} from "../redux/actions/dataActions";

import {
  ArrowIcon,
  CartIcon,
  CloseIcon,
  DriverIcon,
  GroupIcon,
  InfoIcon,
  MinusIcon,
  PlusIcon,
  StarIcon,
} from "../utils/images";

const Home = () => {
  const dispatch = useDispatch();

  const currentRestaurant = useSelector((state) => state.currentRestaurant);
  const currentItems = useSelector((state) => state.currentItems);

  const groupedItems = currentItems.categories.map((category) => ({
    category,
    items: currentItems.items.filter((item) => item.category === category.id),
  }));


  const [currentlyViewing, setCurrentlyViewing] = useState(undefined);
  const [activeTitle, setActiveTitle] = useState(currentItems.categories[0]);

  const [loading, setLoading] = useState(true);

  const handleAddToCart = (item) => {
    dispatch(
      updateCartItemsAction({
        ...currentItems,
        cart: [...currentItems.cart, item],
      })
    );
  };

  useEffect(() => {
    dispatch(updateCurrentRestaurantAction());
    dispatch(updateCurrentItemAction());
    setLoading(false);
  }, []);
  return (
    !loading && (
      <div>
        <div id="header">
          <div className="container-fluid mt-4">
            <div className="row">
              <div className="col-lg-3 col-auto">
                <img
                  className="header-img"
                  src={process.env.REACT_APP_BE_URL+"/images/"+currentRestaurant.bannerImage || "/assets/images/img.jpg"}
                  alt={currentRestaurant.name}
                />
              </div>
              <div className="col-lg-6 col-auto">
                <h1>{currentRestaurant.name}</h1>
                <ul className="d-flex gap-lg-3 gap-1 px-0 info-list">
                  <p>{currentRestaurant.deliverIn}</p>
                  {currentRestaurant.tags.map((i, id) => (
                    <li key={id}>{i}</li>
                  ))}
                </ul>
                <ul className="d-flex gap-lg-3 gap-1 px-0 info-list">
                  <p>5 miles away</p>
                  <li>Closes at {currentRestaurant.closeTime}</li>
                  <li>£1 minimum</li>
                  <li>£0.7 delivery</li>
                </ul>
                <div className="hstack gap-3 info-wrapper mt-3">
                  <InfoIcon />
                  <div className="vstack">
                    <h6 className="my-0">Info</h6>
                    <p className="my-0">Map, allergies and hygiene rating</p>
                  </div>
                  <ArrowIcon />
                </div>
                <div className="hstack gap-3 reviews-wrapper mt-3">
                  <StarIcon />
                  <div className="vstack">
                    <h6 className="my-0">4.7 Excellent</h6>
                    <p className="my-0">See all 500 reviews</p>
                  </div>
                  <ArrowIcon />
                </div>
              </div>
              <div className="col-lg-2 col-auto delivery-wrapper mt-lg-0 mt-3">
                <div className="hstack gap-3 justify-content-lg-end">
                  <DriverIcon />
                  <p>Deliver in 15 - 25 Min</p>
                  <a href="#">Change</a>
                </div>
                <button className="btn btn-secondary d-flex ms-lg-auto mt-3 w-80 justify-content-center">
                  <GroupIcon />
                  <span>Start group order</span>
                </button>
              </div>
              <img />
            </div>
          </div>

          <ItemNav active={activeTitle} setActive={setActiveTitle} />
          <div className="container-fluid items-container pb-5 min-vh-100">
            <small >Adults need around 2000 kcal a day</small>
            <div className="row items-wrapper">
              <div className="col-lg-8 col-auto">
                {groupedItems.map(
                  (group) =>
                    group.items.length > 0 && (
                      <div className="item-section" key={group.category.id}>
                        <InView
                          as="h4"
                          id={`title-${group.category.id}`}
                          threshold={0.3}
                          onChange={(inView, entry) => {
                            if (inView) {
                              setActiveTitle(group.category);
                            }
                          }}
                        >
                          {group.category.name}
                        </InView>
                        <div className="row gap-lg-3 gap-1 mx-0 mt-4">
                          {group.items.map((item, index) => (
                            <Item
                              key={index}
                              data={item}
                              setData={setCurrentlyViewing}
                            />
                          ))}
                        </div>
                      </div>
                    )
                )}
              </div>
              <div className="col-lg-4 d-lg-block d-none">
              <Cart />
              </div>
            </div>
          </div>
          <ItemDataModal data={currentlyViewing} handleAddToCart={handleAddToCart}/>
        </div>
      </div>
    )
  );
};

const ItemDataModal = ({ data, handleAddToCart }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="modal fade" id="itemModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content item-data-modal">
          <button className="close-btn" data-bs-dismiss="modal">
            <CloseIcon />
          </button>
          <div className="modal-body">
            <div className="img-wrapper">
              <img
                src={process.env.REACT_APP_BE_URL+"/images/"+data?.image || "/assets/images/img2.jpg"}
                alt={data?.name}
              />
            </div>
            <div className="content">
              <h3>{data?.name}</h3>
              <p className="my-2">{data?.description}</p>
              <p>{data?.calories} kcal</p>
              <hr />
              <div className="contains my-3">
                <p>Contains {data?.contains}</p>
                <small>
                  Questions about allergens, ingredients or cooking methods?
                </small>
                <br />
                <a href="#">Please contact the restaurant.</a>
              </div>
              <hr />

              {data?.DishItems.map((item) => (
                
              <div class="container mt-4">
                <div class="row">
                  <div class="col-md-3 align-items-center">
                    <input type="checkbox" class="form-check-input"/>
                  </div>
                  <div class="col-md-7">
                    <h6>{item.name}</h6>
                    <p class="text-muted custom-txt">{item.contains}</p>
                  </div>
                  <div class="col-md-2 text-right">
                    <p>+£{item.price}</p>
                  </div>
                </div>
              </div>
              ))}
            
            </div>
            <div className="footer-cart">
              <div className="hstack justify-content-center">
                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
                  <MinusIcon />
                </button>
                <div className="qty">{qty}</div>
                <button onClick={() => setQty(qty + 1)}>
                  <PlusIcon />
                </button>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart({ ...data, qty: qty })}
                data-bs-dismiss="modal"
              >
                Add for £{qty * data?.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
