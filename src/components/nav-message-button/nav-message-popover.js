import React, { useRef, useState } from "react";
import { AddFriend, Dots, Edit, Search } from "../../icons";
import * as styles from "./nav-message-popover.module.css";
import classNames from "classnames";
import { isEmpty, isNil } from "ramda";

const NavMessagePopover = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const inputRef = useRef(null);

  const searchClasses = classNames(styles["list__search"], {
    [styles["list__search--focused"]]: isSearchFocused,
  });

  const onSearchClicked = () => {
    inputRef.current.focus();
  };

  const onSearchFocused = () => {
    setIsSearchFocused(true);
  };

  const onSearchBlurred = () => {
    const inputValue = inputRef.current.value;

    if (isEmpty(inputValue) || isNil(inputValue)) {
      setIsSearchFocused(false);
    }
  };

  return (
    <div className={styles["popover"]}>
      <div className={styles["popover__header"]}>
        <div className={styles["header__title"]}>Inbox</div>
        <div className={styles["header__icon"]}>
          <Dots />
        </div>
      </div>
      <div className={styles["list"]}>
        <div className={searchClasses} onClick={onSearchClicked}>
          {!isSearchFocused && (
            <Search
              className={styles["list__search__icon"]}
              width={18}
              height={18}
            />
          )}
          <input
            onBlur={onSearchBlurred}
            onFocus={onSearchFocused}
            ref={inputRef}
            className={styles["list__search__input"]}
            placeholder="Search by name or email"
          />
        </div>
        <div className={styles["list__item"]}>
          <div className={styles["list__icon-container"]}>
            <Edit />
          </div>
          <span className={styles["list__item__text"]}>New message</span>
        </div>
        <div className={styles["list__item"]}>
          <div
            className={classNames(
              styles["list__icon-container"],
              styles["list__icon--grey"]
            )}
          >
            <AddFriend />
          </div>
          <div className={styles["list__item__text-container"]}>
            <span className={styles["list__item__text"]}>
              Invite your friends
            </span>
            <span className={styles["list__item__subtext"]}>
              Connect to start chatting
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMessagePopover;
