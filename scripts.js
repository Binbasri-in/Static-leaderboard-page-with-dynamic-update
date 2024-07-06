document.addEventListener('DOMContentLoaded', function() {
    fetch('winners.json')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('leaderboard-body');
            data.forEach(item => {
                const row = `<tr>
                                <th scope="row">${item.rank}</th>
                                <td>${item.team_name}</td>
                                <td>${item.score}</td>
                            </tr>`;
                tbody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error loading leaderboard data:', error));
});
