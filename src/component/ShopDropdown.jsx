import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const ShopDropdown = () => {
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isChildrenOpen, setIsChildrenOpen] = useState(false);
    const [isMaleOpen, setIsMaleOpen] = useState(false);
    const [isFemaleOpen, setIsFemaleOpen] = useState(false);

    return (
        <div className="nav-item dropdown">
            {/* Shop Products Dropdown Trigger */}
            <a
                className="nav-link"
                href="#"
                id="shopDropdown"
                role="button"
                aria-expanded={isShopOpen}
                onClick={(e) => {
                    e.preventDefault();
                    setIsShopOpen(!isShopOpen);
                }}
            >
                Shop Products <ChevronDown aria-hidden="true" />
            </a>

            {/* Shop Products Dropdown Menu */}
            <ul className={`dropdown-menu w-100 ${isShopOpen ? 'show' : ''}`} aria-labelledby="shopDropdown">
                <li>
                    <a className="dropdown-item" href="#">
                        ALL PRODUCTS
                    </a>
                </li>
                {/* Flex container for Children, Men, and Women with red background */}
                <div className="d-flex red-bg">
                    <li className="flex-grow-1">
                        <a
                            className="dropdown-item fw-bold text-white"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsChildrenOpen(!isChildrenOpen);
                            }}
                        >
                            CHILDREN <ChevronDown aria-hidden="true" />
                        </a>
                        {/* Children Submenu */}
                        {isChildrenOpen && (
                            <ul className="list-unstyled ps-3">
                                <li className="position-relative">
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setIsMaleOpen(!isMaleOpen);
                                        }}
                                    >
                                        Male <ChevronDown aria-hidden="true" />
                                    </a>
                                    {/* Male Submenu */}
                                    {isMaleOpen && (
                                        <ul className="list-unstyled dropdown-menu-right" style={{ position: 'absolute', left: '100%', top: 0 }}>
                                            <li><a className="dropdown-item" href="#">Boxers</a></li>
                                            <li><a className="dropdown-item" href="#">Pants</a></li>
                                            <li><a className="dropdown-item" href="#">T-shirts</a></li>
                                            <li><a className="dropdown-item" href="#">Singlet</a></li>
                                            <li><a className="dropdown-item" href="#">Towels</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li className="position-relative">
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setIsFemaleOpen(!isFemaleOpen);
                                        }}
                                    >
                                        Female <ChevronDown aria-hidden="true" />
                                    </a>
                                    {/* Female Submenu */}
                                    {isFemaleOpen && (
                                        <ul className="list-unstyled dropdown-menu-right" style={{ position: 'absolute', left: '100%', top: 0 }}>
                                            <li><a className="dropdown-item" href="#">Dresses</a></li>
                                            <li><a className="dropdown-item" href="#">Skirts</a></li>
                                            <li><a className="dropdown-item" href="#">Tops</a></li>
                                            <li><a className="dropdown-item" href="#">Underwear</a></li>
                                            <li><a className="dropdown-item" href="#">Towels</a></li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="flex-grow-1">
                        <a className="dropdown-item fw-bold text-white" href="#">
                            Men
                        </a>
                    </li>
                    <li className="flex-grow-1">
                        <a className="dropdown-item fw-bold text-white" href="#">
                            Women
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default ShopDropdown;