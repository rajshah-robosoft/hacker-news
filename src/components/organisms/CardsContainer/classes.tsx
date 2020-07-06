import React from "react";
import NewsCard from "../../molecule/Cards/NewsCard";
import NewestCard from "../../molecule/Cards/NewestCard";
import AskCard from "../../molecule/Cards/AskCard";
import JobsCard from "../../molecule/Cards/JobsCard";

class Card {
  renderCard = () => {};
}

export class NewsCardClass extends Card {
  constructor(public index: number, public key: number, public subUrl: string) {
    super();
  }
  renderCard = () => {
    return <NewsCard index={this.index} key={this.key} subUrl={this.subUrl} />;
  };
}

export class NewestCardClass extends Card {
  constructor(public index: number, public key: number, public subUrl: string) {
    super();
  }
  renderCard = () => {
    return (
      <NewestCard index={this.index} key={this.key} subUrl={this.subUrl} />
    );
  };
}

export class AskCardClass extends Card {
  constructor(public index: number, public key: number, public subUrl: string) {
    super();
  }
  renderCard = () => {
    return <AskCard index={this.index} key={this.key} subUrl={this.subUrl} />;
  };
}

export class ShowCardClass extends Card {
  constructor(public index: number, public key: number, public subUrl: string) {
    super();
  }
  renderCard = () => {
    return (
      <AskCard
        index={this.index}
        key={this.key}
        subUrl={this.subUrl}
        isShow={true}
      />
    );
  };
}

export class JobsCardClass extends Card {
  constructor(public index: number, public key: number, public subUrl: string) {
    super();
  }
  renderCard = () => {
    return <JobsCard index={this.index} key={this.key} subUrl={this.subUrl} />;
  };
}
