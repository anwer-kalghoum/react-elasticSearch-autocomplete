import React, { Component } from 'react';
import './App.css';
import { ReactiveBase, CategorySearch, ResultCard } from '@appbaseio/reactivesearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ReactiveBase url="http://localhost:9200/" app="base" type="client">
          
            <div>
            <h1>
               Autocomplete ElasticSearch !
            </h1>
         
              <CategorySearch
                componentId="searchbox"
                dataField="name"
                categoryField="name.raw"
                placeholder="Search for cars"
              />
              <ResultCard
                componentId="searchbox"
                dataField="name"
                size={30}
                pagination={true}
                react={{
                  and: ["searchbox", "ratingsfilter"]
                }}
                onData={(res) => {
                  return {
                    image: 'http://dummy-images.com/abstract/dummy-480x270-Utrecht.jpg',
                    title: res.name,
                    description: res.name + " " + "*".repeat(res.rating)
                  }
                }}
              />
				</div>
          </ReactiveBase>
        </header>
      </div>
    );
  }
}

export default App;
