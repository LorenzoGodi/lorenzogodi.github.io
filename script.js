document.getElementById('enBtn').addEventListener('click', function() {
    lang = 'en';
    switchLanguage();
});

document.getElementById('itBtn').addEventListener('click', function() {
    lang = 'it';
    switchLanguage();
});

document.getElementById('download-btn').addEventListener('click', downloadLatestCV);


function switchLanguage() {
    let elements = document.querySelectorAll('[data-lang]');
    elements.forEach(function(el) {
        if (el.getAttribute('data-lang') === lang) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });

    document.getElementById('enBtn').classList.toggle('active', lang === 'en');
    document.getElementById('itBtn').classList.toggle('active', lang === 'it');
}

async function downloadLatestCV() {
    filename = lang === 'en' ? 'LorenzoGodi_CV_en.pdf' : 'LorenzoGodi_CV_it.pdf';

    try {
        // Fetch the latest release info from GitHub API
        const response = await fetch(`https://api.github.com/repos/LorenzoGodi/cv/releases/latest`);
        const release = await response.json();
        // Find the asset with the desired filename
        const asset = release.assets.find(asset => asset.name == filename);
        
        if (asset) {
            // Create an anchor element to trigger the download
            const link = document.createElement('a');
            link.href = asset.browser_download_url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('File not found in the latest release.');
        }
    } catch (error) {
        console.error('Error fetching the latest release:', error);
        alert('Failed to download the file.');
    }
}


// Initial setup: Display English by default
lang = 'en';
switchLanguage();