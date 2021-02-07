import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Sharmarke Ibrahim",
      username: "sharmarkei",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/43233550_2144281329232618_4893509845266726912_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=P26v6Qj9F88AX-4aLl4&_nc_ht=scontent-sea1-1.xx&oh=6f941a4247f3bd089e062c0ee2b6e2f2&oe=603DCF45",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/43233550_2144281329232618_4893509845266726912_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=P26v6Qj9F88AX-4aLl4&_nc_ht=scontent-sea1-1.xx&oh=6f941a4247f3bd089e062c0ee2b6e2f2&oe=603DCF45" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;