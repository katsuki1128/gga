
//----------------------------------------
// カウントとパーセンテージを計算する関数
//----------------------------------------
export const calculateCountsAndPercentages = (docs) => {
    // カウントをリセット
    AGroupCount = 0;
    BGroupCount = 0;
    totalCount = 0;

    // 各ドキュメントのカウントを集計する
    docs.forEach((doc) => {
        const docId = doc.id;
        const docCount = doc.data().count || 0;

        if (AGroupIds.includes(docId)) {
            AGroupCount += docCount;
        }
        if (BGroupIds.includes(docId)) {
            BGroupCount += docCount;
        }
    });

    // 合計カウントとパーセンテージを計算
    totalCount = AGroupCount + BGroupCount;
    AGroupPercentage = (totalCount > 0) ? (AGroupCount / totalCount) * 100 : 0;
    BGroupPercentage = (totalCount > 0) ? (BGroupCount / totalCount) * 100 : 0;

    // 結果をコンソールに出力
    // console.log('AGroupCount:', AGroupCount, 'BGroupCount:', BGroupCount);
    // console.log('AGroupPercentage:', AGroupPercentage.toFixed(2), 'BGroupPercentage:', BGroupPercentage.toFixed(2));
};

export const renderImages = () => {
    stampListContainer.innerHTML = '';

    initialImageUrls.forEach((imageUrl, index) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'image-wrapper';

        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.className = 'image';
        imageElement.style.marginBottom = '8px';
        imageElements.push(imageElement)

        imageWrapper.appendChild(imageElement);

        stampListContainer.appendChild(imageWrapper);
    });
}

export const stampClick = (stampId) => {
    // 関数の内容
};