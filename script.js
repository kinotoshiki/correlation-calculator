// script.js

document.getElementById('correlationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const xValues = document.getElementById('xValues').value.split(',').map(Number);
    const yValues = document.getElementById('yValues').value.split(',').map(Number);

    if (xValues.length !== yValues.length) {
        alert('XとYの値の数は同じでなければなりません。');
        return;
    }

    const pearson = ss.sampleCorrelation(xValues, yValues);
    const spearman = ss.spearmanRankCorrelation(xValues, yValues);

    document.getElementById('pearson').textContent = pearson.toFixed(4);
    document.getElementById('spearman').textContent = spearman.toFixed(4);
});
