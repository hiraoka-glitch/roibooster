# ROIブースター LP - 静的サイト版

外部フォーム利用のシンプル設計で、広告運用（Meta/YouTube）に必要な計測・UTM引き継ぎ・速度最適化を満たす静的LPです。

## 🌐 公開URL

**Vercel**: [https://roi-booster-lp.vercel.app](https://roi-booster-lp.vercel.app)

## 📁 ファイル構成

```
/
├── index.html              # LP本体
├── thanks.html             # 送信後遷移用
├── README.md               # このファイル
└── assets/
    ├── styles.css          # スタイルシート
    ├── main.js             # UTM引き継ぎ＆UI
    ├── og.jpg              # OG画像（1200x630）
    ├── favicon.ico         # ファビコン
    └── img/                # 画像置き場
        ├── hero-image.webp
        └── service-image.webp
```

## 🚀 公開方法

### 1. Vercel（推奨・現在使用中）
1. [Vercel](https://vercel.com) にアクセス
2. "Import Git Repository" をクリック
3. GitHubリポジトリ `roi-booster-lp` を選択
4. 設定：
   - **Framework Preset**: Other
   - **Build Command**: （空欄）
   - **Output Directory**: .
5. Deploy をクリック

### 2. Netlify
1. [Netlify](https://netlify.com) にアクセス
2. `dist` フォルダをドラッグ&ドロップ
3. 自動でデプロイ完了

### 3. GitHub Pages
1. リポジトリの Settings → Pages → Source で `main` ブランチを選択
2. 自動でデプロイ完了

## 📝 差し替えが必要な箇所

### 1. フォーム設定

#### 埋め込み型（デフォルト）
`index.html` の以下の部分を編集：

```html
<!-- TODO: フォームURLを設定 -->
<iframe 
    id="leadForm"
    data-form-src="https://tally.so/embed/your-form-id"
    width="100%" 
    height="600" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0" 
    title="ROIブースター無料相談フォーム">
</iframe>
```

**対応フォームサービス：**
- **Tally**: `https://tally.so/embed/your-form-id`
- **Google Forms**: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true`
- **Typeform**: `https://form.typeform.com/to/YOUR_FORM_ID`

#### フォームの送信後リダイレクト設定
**重要**: フォーム側で「送信後リダイレクトURL」を以下のURLに設定してください：

```
https://roi-booster-lp.vercel.app/thanks.html
```

これにより、フォーム送信後に `/thanks.html` に遷移し、CVイベントが発火します。

#### 遷移型（代替案）
埋め込み型を無効化し、以下のコメントアウトを解除：

```html
<!-- 遷移型（代替案） -->
<div class="form-redirect">
    <p>フォームページで詳細をご記入ください</p>
    <a href="https://tally.so/your-form-id" class="btn btn-primary js-pass-utm" target="_blank">
        フォームページを開く
    </a>
</div>
```

### 2. 計測タグ設定

#### GA4設定
`index.html` と `thanks.html` の以下の部分を編集：

```html
<!-- TODO: GA4測定IDを設定 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID'); // ← ここを実際の測定IDに変更
</script>
```

**測定IDの取得方法：**
1. [Google Analytics](https://analytics.google.com/) にアクセス
2. プロパティ設定 → データストリーム → Webストリーム
3. 測定ID（G-XXXXXXXXXX）をコピー

#### Metaピクセル設定
`index.html` と `thanks.html` の以下の部分を編集：

```html
<!-- TODO: Meta Pixel IDを設定 -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'PIXEL_ID'); // ← ここを実際のピクセルIDに変更
fbq('track', 'PageView');
</script>
```

**ピクセルIDの取得方法：**
1. [Facebook Business Manager](https://business.facebook.com/) にアクセス
2. イベントマネージャー → ピクセル
3. ピクセルIDをコピー

### 3. メタ情報設定

#### ドメイン設定
`index.html` の以下の部分を編集：

```html
<meta property="og:url" content="https://roi-booster-lp.vercel.app">
<meta property="og:image" content="assets/og.jpg">
```

#### Schema.org設定
`index.html` の以下の部分を編集：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ROIブースター",
  "description": "媒体運用 × LP改善で、Web集客ROIを向上させるサービス",
  "url": "https://roi-booster-lp.vercel.app", // ← ここを実際のドメインに変更
  "logo": "https://roi-booster-lp.vercel.app/assets/og.jpg" // ← ここを実際のドメインに変更
}
</script>
```

### 4. 画像差し替え

#### OG画像
- サイズ: 1200x630px
- 形式: JPG推奨
- ファイル名: `assets/og.jpg`

#### ファビコン
- サイズ: 32x32px
- 形式: ICO推奨
- ファイル名: `assets/favicon.ico`

#### コンテンツ画像
- 形式: WebP推奨（軽量）
- 配置: `assets/img/` フォルダ内

## 📊 計測テスト方法

### 1. CV計測テスト

#### 埋め込み型フォーム
1. フォームを送信
2. フォーム側で「送信後リダイレクトURL」を `/thanks.html` に設定
3. `thanks.html` で以下のイベントが発火することを確認：
   - GA4: `generate_lead`
   - Meta: `Lead`

#### 遷移型フォーム
1. CTAボタンをクリック
2. 外部フォームページで送信
3. フォーム側でリダイレクト先を `/thanks.html` に設定
4. 同上のイベント発火を確認

### 2. UTM引き継ぎテスト

#### テストURL例
```
https://roi-booster-lp.vercel.app/?utm_source=meta&utm_medium=cpc&utm_campaign=roi_booster&gclid=test123
```

#### 確認ポイント
1. **埋め込み型**: iframeのsrcにUTMパラメータが付与されているか
2. **遷移型**: CTAリンクのhrefにUTMパラメータが付与されているか
3. **ブラウザ開発者ツール**: Consoleでログを確認

#### 対象パラメータ
- `utm_source`: 広告元（meta, google, youtube等）
- `utm_medium`: 広告媒体（cpc, display, video等）
- `utm_campaign`: キャンペーン名
- `utm_content`: 広告内容
- `utm_term`: キーワード
- `gclid`: Google広告のクリックID
- `gbraid`: Google広告のブラウザID
- `wbraid`: Google広告のWebID
- `fbclid`: Facebook広告のクリックID

## 🔧 カスタマイズ

### 1. 色の変更
`assets/styles.css` のCSS変数を編集：

```css
:root {
    --color-primary: #0b1020;        /* メイン背景色 */
    --color-secondary: #1e293b;      /* セカンダリ背景色 */
    --color-accent-blue: #2563eb;    /* アクセント青 */
    --color-accent-green: #16a34a;   /* アクセント緑 */
    --color-text: #f8fafc;           /* メインテキスト色 */
}
```

### 2. フォントの変更
`assets/styles.css` のフォントファミリーを編集：

```css
:root {
    --font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### 3. レイアウトの調整
各セクションの `padding` や `margin` を調整：

```css
section {
    padding: var(--spacing-2xl) 0; /* 上下の余白 */
}
```

## 📱 レスポンシブ対応

### ブレークポイント
- **モバイル**: 600px以下
- **タブレット**: 600px〜900px
- **デスクトップ**: 900px以上

### 最適化ポイント
- モバイル優先設計
- 画像の遅延読み込み
- クリティカルCSSの最適化

## 🚨 トラブルシューティング

### 1. フォームが表示されない
- iframeの `data-form-src` が正しく設定されているか確認
- フォームURLが正しいか確認
- ブラウザのコンソールでエラーがないか確認

### 2. UTM引き継ぎが動作しない
- `main.js` が正しく読み込まれているか確認
- ブラウザのコンソールでログを確認
- URLパラメータが正しい形式か確認

### 3. 計測タグが動作しない
- 測定ID・ピクセルIDが正しく設定されているか確認
- ブラウザの開発者ツールでネットワークタブを確認
- 広告ブロッカーが無効化されているか確認

## 📞 サポート

技術的な問題やカスタマイズについて、お気軽にお問い合わせください。

---

**ROIブースター LP** - 静的サイト版  
Version: 1.0.0  
Last Updated: 2024年8月  
Published on: Vercel
