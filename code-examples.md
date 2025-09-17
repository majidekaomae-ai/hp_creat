# ザ・カラーズ ポートフォリオサイト - リンクボタン コード例集

新着ページや他のページで使用できるリンクボタンのコード例です。
**サイトURL**: https://hp-creat.onrender.com/

## 使用方法

1. 下記のコードをコピーして、HTMLファイルに貼り付けてください
2. CSSファイルも合わせて読み込んでください
3. Font AwesomeとGoogle Fontsの読み込みが必要です

### 必要な外部リソース

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
```

---

## パターン1: シンプルボタン

### HTML
```html
<a href="https://hp-creat.onrender.com/" target="_blank" class="btn-simple">
    <i class="fas fa-external-link-alt"></i>
    制作実績を見る
</a>
```

### CSS
```css
.btn-simple {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 123, 255, 0.3);
}

.btn-simple:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.4);
}
```

---

## パターン2: カラフルグラデーションボタン

### HTML
```html
<a href="https://hp-creat.onrender.com/" target="_blank" class="btn-gradient">
    <i class="fas fa-palette"></i>
    THE COLORS ポートフォリオ
</a>
```

### CSS
```css
.btn-gradient {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    background: linear-gradient(135deg, #FF6B6B, #FFD93D, #6BCF7F, #4ECDC4, #45B7D1, #9B59B6);
    background-size: 300% 100%;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    animation: gradientShift 3s ease-in-out infinite;
}

.btn-gradient:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}
```

---

## パターン3: ロゴ付きボタン

### HTML
```html
<a href="https://hp-creat.onrender.com/" target="_blank" class="btn-logo">
    <div class="btn-logo-stripes">
        <div class="stripe stripe-1"></div>
        <div class="stripe stripe-2"></div>
        <div class="stripe stripe-3"></div>
        <div class="stripe stripe-4"></div>
        <div class="stripe stripe-5"></div>
        <div class="stripe stripe-6"></div>
    </div>
    <span class="btn-text">制作実績サイト</span>
    <i class="fas fa-arrow-right"></i>
</a>
```

### CSS
```css
.btn-logo {
    display: inline-flex;
    align-items: center;
    gap: 15px;
    padding: 15px 25px;
    background: white;
    color: #333;
    text-decoration: none;
    border-radius: 12px;
    border: 2px solid #e9ecef;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 3px 15px rgba(0,0,0,0.1);
}

.btn-logo:hover {
    border-color: #FF0050;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 0, 80, 0.2);
}

.btn-logo-stripes {
    display: flex;
    gap: 2px;
    height: 20px;
}

.stripe {
    width: 4px;
    height: 20px;
    border-radius: 2px;
}

.stripe-1 { background: #FF6B6B; }
.stripe-2 { background: #FFD93D; }
.stripe-3 { background: #6BCF7F; }
.stripe-4 { background: #4ECDC4; }
.stripe-5 { background: #45B7D1; }
.stripe-6 { background: #9B59B6; }
```

---

## パターン4: TikTokピンクボタン

### HTML
```html
<a href="https://hp-creat.onrender.com/" target="_blank" class="btn-tiktok">
    <i class="fas fa-play"></i>
    映像制作実績を見る
</a>
```

### CSS
```css
.btn-tiktok {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: linear-gradient(135deg, #FF0050, #FE2C55);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 0, 80, 0.3);
}

.btn-tiktok:hover {
    background: linear-gradient(135deg, #E6004A, #E5284F);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 0, 80, 0.4);
}
```

---

## パターン5: カード型ボタン

### HTML
```html
<a href="https://hp-creat.onrender.com/" target="_blank" class="btn-card">
    <div class="btn-card-header">
        <i class="fas fa-video"></i>
        <h3>制作実績</h3>
    </div>
    <div class="btn-card-body">
        <p>番組制作・CM・YouTube・TikTok・イベント</p>
        <span class="btn-card-link">詳細を見る <i class="fas fa-chevron-right"></i></span>
    </div>
</a>
```

### CSS
```css
.btn-card {
    display: block;
    max-width: 300px;
    background: white;
    text-decoration: none;
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid #e9ecef;
    transition: all 0.3s ease;
    box-shadow: 0 3px 15px rgba(0,0,0,0.1);
}

.btn-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    border-color: #FF0050;
}

.btn-card-header {
    padding: 20px;
    background: linear-gradient(135deg, #FF0050, #FE2C55);
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
}

.btn-card-header h3 {
    margin: 0;
    font-size: 1.2rem;
}

.btn-card-body {
    padding: 20px;
    color: #333;
}

.btn-card-body p {
    margin-bottom: 15px;
    color: #666;
    font-size: 0.9rem;
}

.btn-card-link {
    color: #FF0050;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
}
```

---

## パターン6: 小さなアイコンボタン

### HTML
```html
<!-- アイコンのみ -->
<a href="https://hp-creat.onrender.com/" target="_blank" class="btn-small">
    <i class="fas fa-external-link-alt"></i>
</a>

<!-- テキスト付き -->
<a href="https://hp-creat.onrender.com/" target="_blank" class="btn-small btn-small-text">
    ポートフォリオ
</a>
```

### CSS
```css
.btn-small {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 123, 255, 0.3);
}

.btn-small:hover {
    background: #0056b3;
    transform: scale(1.1);
}

.btn-small-text {
    width: auto;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
}
```

---

## 📋 使用上の注意

1. **リンク先**: 全てのボタンは `https://hp-creat.onrender.com/` にリンクしています
2. **ターゲット**: `target="_blank"` で新しいタブで開きます
3. **レスポンシブ**: モバイル対応済みです
4. **カスタマイズ**: 色やサイズは自由に変更可能です

お好みのデザインをお選びいただき、新着ページでご活用ください！