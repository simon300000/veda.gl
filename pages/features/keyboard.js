import React from "react";
import { connect } from "react-redux";
import Article from "../../components/article";
import parse from "../parse";
import en from "./keyboard.md";
import ja from "./keyboard.ja.md";
import shader from "./keyboard.frag";

export default connect()(() => (
  <Article
    path="/features/keyboard"
    article={{
      en: parse(en),
      ja: parse(ja)
    }}
    shader={{
      attach(veda) {
        veda.setFrameskip(2);
        veda.toggleKeyboard(true);
        veda.loadTexture("font", "/static/images/font.png");
        veda.loadFragmentShader(shader);
      },
      detach(veda) {
        veda.toggleKeyboard(false);
        veda.unloadTexture("font", "/static/images/font.png");
      }
    }}
  />
));
