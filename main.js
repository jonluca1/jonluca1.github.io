async function updateToggleState() {
    const toggleState = document.getElementById('toggleCheckbox').checked;

    // Use GitHub API to update a file in your repository with the toggle state
    const repoOwner = 'your-username';
    const repoName = 'your-repo';
    const filePath = 'toggle-state.json';

    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: 'Update toggle state',
            content: btoa(JSON.stringify({ toggleState })),
            sha: 'SHA_OF_EXISTING_FILE', // Get this from a previous GitHub API request
        }),
    });

    if (response.ok) {
        alert('Toggle state updated successfully!');
    } else {
        alert('Failed to update toggle state.');
    }
}