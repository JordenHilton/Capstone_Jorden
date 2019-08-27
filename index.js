import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Navigo from 'navigo';

// location.origin provides the base url for Navigo to get started.
// new creates a new instance of Navigo from it's constructor fxn.

const router = new Navigo(location.origin);

const store = {
    'home': {
        'links': {
            'primary': [ 'Financing', 'Homes', 'Afterwards', ],
            
        },
        'title': 'Homely',
        'page':
        `
        <nav>
        <ul>
          <li><a href="./Financing">Financing</a></li>
          <li>Homes</li>
          <li>Afterwards</li>
        </ul>
      </nav>`
    },
    'Financing': {
        'links': {
            'primary': [ 'Financing', 'Homes', 'Afterwards', ],
        },
        'title': 'Financing',
        'page': `<p>
        Under Construction
      </p>`
    },
    'Homes': {
        'links': {
            'primary': [ 'Financing', 'Homes', 'Afterwards', ],
        },
        'title': 'Homes',
        'page': `
          <p>under construction</p>
          `
    },
    'Afterwards': {
        'links': {
            'primary': [ 'Financing', 'Homes', 'Afterwards', ],
        },
        'title': 'Afterwards',
        'page': `<p>
    under construction</p>`
    }
};

function render(state){
    console.log('state came in as:', state);

    // We use function invocation that actually runs the fxn. and then 'returns' the markup so that it is properly rendered in browser.
    document.querySelector('#root').innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Main(state)}
        ${Footer(state)}
    `;
    router.updatePageLinks();
}