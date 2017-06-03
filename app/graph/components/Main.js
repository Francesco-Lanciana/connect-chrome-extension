import React from 'react';
import Dashboard from 'Dashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class Main extends React.Component {
  render () {
    return (
        <Router>
            <div>
                <ul>
                    <li></li>
                    <li>Messages</li>
                </ul>

                <script className="podigee-podcast-player" src="https://cdn.podigee.com/podcast-player/javascripts/podigee-podcast-player.js" data-configuration="https://example.com/my-podcast-episode.json"></script>

                <Route pattern="/" component={Dashboard}/>
            </div>
        </Router>
    );
  }
}
