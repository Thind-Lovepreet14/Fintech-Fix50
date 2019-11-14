import React from 'react';

const GameStats = () => {
    return (
        <div class="table-responsive">
        <table class="table table-hover table-dark stats-table">
            <thead>
                <tr className="table-heading">
                <th scope="col">Game</th>
                <th scope="col">Date</th>
                <th scope="col">MIN</th>
                <th scope="col">PTS</th>
                <th scope="col">FGM</th>
                <th scope="col">FGA</th>
                <th scope="col">FG%</th>
                <th scope="col">3PM</th>
                <th scope="col">3PA</th>
                <th scope="col">3P%</th>
                <th scope="col">FTM</th>
                <th scope="col">FTA</th>
                <th scope="col">FT%</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>01/04/2019</td>
                <td>25</td>
                <td>33</td>
                <td>12</td>
                <td>25</td>
                <td>48.0</td>
                <td>3</td>
                <td>7</td>
                <td>42.9</td>
                <td>6</td>
                <td>7</td>
                <td>85.7</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>01/10/2019</td>
                <td>32</td>
                <td>28</td>
                <td>10</td>
                <td>19</td>
                <td>52.6</td>
                <td>4</td>
                <td>11</td>
                <td>36.4</td>
                <td>4</td>
                <td>5</td>
                <td>80.0</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>01/15/2019</td>
                <td>33</td>
                <td>27</td>
                <td>11</td>
                <td>24</td>
                <td>45.8</td>
                <td>2</td>
                <td>6</td>
                <td>33.3</td>
                <td>3</td>
                <td>3</td>
                <td>100.0</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default GameStats;