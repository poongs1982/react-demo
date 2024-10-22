import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import store from './components/redux/redux-saga-books/store/store'
import Display from "./components/Display";
import Counter from "./components/counter";
import ListColors from "./components/listColors";
import Header from "./components/header";
import NoMatch from "./components/noMatch";
import BookStoreFunction from "./components/books/books-function/bookStoreFunction";
import BookStoreHttpFunction from "./components/books/books-function-http/bookStoreHttpFunction";
import ToDoListParent from "./components/lifecycle-methods/toDoListParent";
import BookAddHttpFunction from "./components/books/books-function-http/bookAddHttpFunction";
import BookItemHttpFunction from "./components/books/books-function-http/bookItemHttpFunction";
import BookAddFunction from "./components/books/books-function/bookAddFunction";
import BookViewFunction from "./components/books/books-function/bookViewFunction";
import BookViewHttpFunction from "./components/books/books-function-http/bookViewHttpFunction";
import BookItemFunction from "./components/books/books-function/bookItemFunction";
import CookiesContainer from "./components/redux/redux-cookies/components/cookiesContainer";
import CookiesChocoContainer from './components/redux/redux-cookies&chocolates/components/CookiesChocoContainer'
import BookStoreReduxFunction from "./components/redux/redux-books/components/bookStoreReduxFunction";
import BookViewReduxFunction from "./components/redux/redux-books/components/bookViewReduxFunction";
import BookAddReduxFunction from "./components/redux/redux-books/components/bookAddReduxFunction";
import BookItemReduxFunction from "./components/redux/redux-books/components/bookItemReduxFunction";
import BookStoreReduxSagaFunction from "./components/redux/redux-saga-books/components/bookStoreReduxSagaFunction";
import BookItemReduxSagaFunction from "./components/redux/redux-saga-books/components/bookItemReduxSagaFunction";
import BookAddReduxSagaFunction from "./components/redux/redux-saga-books/components/bookAddReduxSagaFunction";
import BookViewReduxSagaFunction from "./components/redux/redux-saga-books/components/bookViewReduxSagaFunction";
import HooksHeader from "./components/hooks/hooks-header";
import CounterFunction from "./components/hooks/useState-hooks/demo1-counter";
import UseStateFunction from "./components/hooks/useState-hooks/demo1-counter";
import CounterTitleClass from "./components/hooks/useEffect-hooks/counter-title-class";
import CounterTitleFunction from "./components/hooks/useEffect-hooks/counter-title-function";
import ApiDemo from "./components/hooks/useEffect-hooks/api-demo";
import RootComponent from "./components/hooks/useContext-hooks/rootComponent";
import DocTitle1 from "./components/hooks/custom-hooks/doc-title-1";
import UseReducerDemo from "./components/hooks/other-hooks/useReducerDemo";
import UseMemoDemo from "./components/hooks/other-hooks/useMemoDemo";
import UseRefDemo from "./components/hooks/other-hooks/useRefDemo";
import UseCallbackDemo from "./components/hooks/other-hooks/useCallbackDemo";
import BookStoreGraphql from "./components/graphql/bookStoreGraphql";
import RootBookStoreGraphql from "./components/graphql/rootBookStoreGraphql";
import BookAddGraphql from "./components/graphql/bookAddGraphql";
import BookViewGraphql from "./components/graphql/bookViewGraphql";
import TestingCounter from "./components/react-testing/testing-counter";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Display />}></Route>
          <Route path="counter" element={<Counter />}></Route>
          <Route path="list-colors" element={<ListColors />}></Route>
          {/* <Route path="cookies" element={<CookiesContainer />}></Route>
          <Route path="cookies-chocolates" element={<CookiesChocoContainer />}></Route> */}

          <Route path="book-store" element={<BookStoreFunction />}>
            <Route path="book-view/:bookId" element={<BookViewFunction />} />
          </Route>
          <Route path="book-item" element={<BookItemFunction />}></Route>
          <Route path="book-add" element={<BookAddFunction />}></Route>

          <Route path="book-store-http" element={<BookStoreHttpFunction />}>
            <Route
              path="book-view-http/:bookId"
              element={<BookViewHttpFunction />}
            />
          </Route>
          <Route
            path="book-item-http"
            element={<BookItemHttpFunction />}
          ></Route>
          <Route path="book-add-http" element={<BookAddHttpFunction />}></Route>

          <Route path="todo" element={<ToDoListParent />}></Route>
          

          <Route path="book-store-redux" element={<BookStoreReduxFunction />}>
            <Route path="book-view-redux/:bookId" element={<BookViewReduxFunction/>}></Route>
          </Route>
          <Route path="book-item-redux" element={<BookItemReduxFunction />}></Route>
          <Route path="book-add-redux" element={<BookAddReduxFunction />}></Route>


          <Route path="book-store-redux-saga" element={<BookStoreReduxSagaFunction />}>
            <Route path="book-view-redux-saga/:bookId" element={<BookViewReduxSagaFunction/>}></Route>
          </Route>
          <Route path="book-item-redux-saga" element={<BookItemReduxSagaFunction />}></Route>
          <Route path="book-add-redux-saga" element={<BookAddReduxSagaFunction />}></Route>

          <Route path="hooks" element={<HooksHeader />}>
            <Route path="useState" element={<UseStateFunction />}></Route>
            <Route path="useEffect-1" element={<CounterTitleClass />}></Route>
            <Route path="useEffect-2" element={<CounterTitleFunction />}></Route>
            <Route path="api-demo" element={<ApiDemo />}></Route>
            <Route path="root-context" element={<RootComponent />}></Route>
            <Route path="custom-hooks" element={<DocTitle1 />}></Route>
            <Route path="use-reducer" element={<UseReducerDemo />}></Route>
            <Route path="use-memo" element={<UseMemoDemo />}></Route>
            <Route path="use-ref" element={<UseRefDemo />}></Route>
            <Route path="use-callback" element={<UseCallbackDemo />}></Route>
          </Route>

          <Route path="root-book-graphql" element={<RootBookStoreGraphql />}>
            <Route path="book-store-graphql" element={<BookStoreGraphql />}>
            <Route path="book-view-graphql/:bookId" element={<BookViewGraphql/>}></Route>
            </Route>
            <Route path="book-add-graphql" element={<BookAddGraphql />}></Route>  
          </Route>
          
          <Route path="counter-testing" element={<TestingCounter/>}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
        {/* <Display></Display> */}
        {/* <Counter></Counter> */}
        {/* <ListColors></ListColors> */}
        {/* <BookStore></BookStore> */}
        {/* <BookAdd></BookAdd> */}
      </div>
    </Provider>
  );
}

export default App;
