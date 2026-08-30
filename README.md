# 異世界の仕様を読み解く者

> この男にだけ、世界の“仕様”が見える。

世界から物、記録、記憶、人が消えていく。異世界から現れた青年ユウだけが、その“異常”を見ることができた。ダークファンタジー『異世界の仕様を読み解く者』の小説本文・長期連載ハーネス・公式プロモーションサイトを管理するリポジトリ。

- Repository：`Unripe01/isekai-spec-reader`
- 公開サイト：[https://isekai.junkhub.fun/](https://isekai.junkhub.fun/)
- 仮サブタイトル：**～SE転移者、誰も知らない不具合を修正し世界を救う～**
- キービジュアル：`contents/images/key-visual.png`

仮サブタイトルは変更可能。本文上は現在「異世界転移」寄りだが、死因・転生方式・転移主体などは未確定であり、必要になるまで新しく断定しない。

## 作品の核

一見すると、魔王復活の兆候に立ち向かう王道ダークファンタジー。しかし物語の中心は、仕様を読んで無双することではない。

**消えていく世界で、何を残すのかを選ぶ物語。**

ユウは万能鑑定者ではない。異常な部分が分かり、直せる場合があるだけで、正常な仕様を自由には読めない。欠損し、参照元まで失われたものは戻せない。

> 消えたものは、忘れる。
>
> ないものは、直せない。

詳細な世界設定、能力制約、キャラクターの不変コア、文体ルールは [STORY_BIBLE.md](docs/series/STORY_BIBLE.md) を参照する。

## 長期連載ハーネス

このプロジェクトでは、未来の完全プロットを固定しない。

**目的地と世界のルールは固定するが、そこへ至る事件や展開は執筆時に生み出す。**

AIの即興で面白い展開が生まれることは歓迎する。ただし採用された瞬間から正史となり、管理ファイルへ反映する。これを「SSRルール」とする。

### 管理ファイル

| ファイル | 役割 |
| --- | --- |
| [STORY_BIBLE.md](docs/series/STORY_BIBLE.md) | 世界の絶対ルール、能力制約、キャラクターの不変コア、文体、禁止事項 |
| [STORY_ROUTE.md](docs/series/STORY_ROUTE.md) | 詳細プロットではなく、Phaseごとの開示範囲と出口条件 |
| [CURRENT_STATE.md](docs/series/CURRENT_STATE.md) | 現在地、同行者、人物ごとの知識、所持品、発生中の事件 |
| [CANON_LEDGER.md](docs/series/CANON_LEDGER.md) | 本文に一度出た正史と、無言で変更してはいけない事実 |
| [OPEN_THREADS.md](docs/series/OPEN_THREADS.md) | 未回収伏線、SSR、関連伏線、回収状態 |
| [EPISODE_SUMMARIES.md](docs/series/EPISODE_SUMMARIES.md) | 各話の出来事・確定事項・意味更新・持ち越しの圧縮サマリ |
| [WRITING_HARNESS.md](docs/series/WRITING_HARNESS.md) | 新話執筆時の読み込み順、チェック、SSR採用、執筆後更新手順 |
| [NEXT_EPISODE_BRIEF.md](docs/series/NEXT_EPISODE_BRIEF.md) | 直近の読後感・ユーザーフィードバック・次話の執筆意図を残す引き継ぎメモ（正史ではない） |

### 新話を書く前の読み込み順

1. `WRITING_HARNESS.md`
2. `STORY_BIBLE.md`
3. `STORY_ROUTE.md`
4. `CURRENT_STATE.md`
5. `OPEN_THREADS.md`
6. `CANON_LEDGER.md`
7. `EPISODE_SUMMARIES.md`
8. `NEXT_EPISODE_BRIEF.md`（存在する場合）
9. 直前二話の本文全文

episode-01から全話を毎回全文読み直さない。古い場面を直接回収するときだけ、該当episodeを追加で読む。

## 現在のエピソード

| 話 | タイトル | 本文 |
| --- | --- | --- |
| episode-01 | プロローグ／第一章「ないものは、直せない」 | [episode-01.md](contents/episodes/episode-01.md) |
| episode-02 | 第二章「消えた鐘」 | [episode-02.md](contents/episodes/episode-02.md) |
| episode-03 | 第三章「道が一本多い」 | [episode-03.md](contents/episodes/episode-03.md) |
| episode-04 | 第四章「同じ名前を二度書く」 | [episode-04.md](contents/episodes/episode-04.md) |
| episode-05 | 第五章「昨日は一つだった」 | [episode-05.md](contents/episodes/episode-05.md) |
| episode-06 | 第六章「どちらの昨日か」 | [episode-06.md](contents/episodes/episode-06.md) |
| episode-07 | 第七章「俺の昨日を返せ」 | [episode-07.md](contents/episodes/episode-07.md) |
| episode-08 | 第八章「俺は倒していない」 | [episode-08.md](contents/episodes/episode-08.md) |
| episode-09 | 第九章「二枚とも本物」 | [episode-09.md](contents/episodes/episode-09.md) |
| episode-10 | 第十章「正しい方を出してください」 | [episode-10.md](contents/episodes/episode-10.md) |
| episode-11 | 第十一章「一頁、足りない」 | [episode-11.md](contents/episodes/episode-11.md) |
| episode-12 | 第十二章「本文ではありません」 | [episode-12.md](contents/episodes/episode-12.md) |
| episode-13 | 第十三章「一人分しかありません」 | [episode-13.md](contents/episodes/episode-13.md) |
| episode-14 | 第十四章「二通とも送ってください」 | [episode-14.md](contents/episodes/episode-14.md) |

現在地はepisode-14終了時点。二人のセドは王都で二枚の保護票による保護を受け、それぞれが故郷の母親へ手紙を書いた。北街道のセドは手紙を書いた後、出発以前の父親の記憶の一部を失うが、十五日のセドは朝の相手が書いた言葉まで消さず、二通とも送ることを選ぶ。二人の記憶差と手紙・控えの残存条件、章末の `Entity deletion detected` の意味は未確定である。詳細は [CURRENT_STATE.md](docs/series/CURRENT_STATE.md) を参照する。

## ディレクトリ構成

```text
.
├─ README.md
├─ contents/
│  ├─ episodes/              # 執筆・管理用の正史本文
│  │  ├─ episode-01.md
│  │  ├─ episode-02.md
│  │  ├─ episode-03.md
│  │  ├─ episode-04.md
│  │  ├─ episode-05.md
│  │  ├─ episode-06.md
│  │  ├─ episode-07.md
│  │  ├─ episode-08.md
│  │  ├─ episode-09.md
│  │  ├─ episode-10.md
│  │  ├─ episode-11.md
│  │  ├─ episode-12.md
│  │  ├─ episode-13.md
│  │  └─ episode-14.md
│  └─ images/
│     └─ key-visual.png      # 元キービジュアル
├─ docs/
│  └─ series/                # 長期連載コンテキストハーネス
└─ site/
   ├─ index.html             # プロモーションTOP
   ├─ img/                   # 公開用画像・OGP
   ├─ contents/episodes/     # 公開用Markdownコピー
   └─ episodes/              # 各話の読書ページ
```

`contents/episodes/` が小説本文の執筆・管理元であり、`site/contents/episodes/` は公開用コピー。本文を修正するときは、公開依頼がある場合だけサイト側へ同期する。

## 本文追加方法

例としてepisode-04を追加する場合：

1. [WRITING_HARNESS.md](docs/series/WRITING_HARNESS.md) の順番でコンテキストを読む。
2. `contents/episodes/episode-04.md` を作成する。
3. 本文確定後、`CANON_LEDGER.md`、`OPEN_THREADS.md`、`EPISODE_SUMMARIES.md`、`CURRENT_STATE.md` を更新する。
4. Phaseの出口条件を満たした場合だけ `STORY_ROUTE.md` を更新する。
5. 作品全体の不変ルールが増えた場合だけ `STORY_BIBLE.md` を更新する。

本文のファイル名は `episode-XX.md` 形式で統一する。執筆だけを依頼された場合、公開サイト、commit、pushまで勝手に行わない。

## 公式サイト

### ページ

- `/`：プロモーションTOP。
- `/episodes/01/`：episode-01読書ページ。
- `/episodes/02/`：episode-02読書ページ。
- `/episodes/03/`：episode-03読書ページ。
- `/episodes/04/`：episode-04読書ページ。
- `/episodes/05/`：episode-05読書ページ。
- `/episodes/06/`：episode-06読書ページ。
- `/episodes/07/`：episode-07読書ページ。
- `/episodes/08/`：episode-08読書ページ。
- `/episodes/09/`：episode-09読書ページ。
- `/episodes/10/`：episode-10読書ページ。
- `/episodes/11/`：episode-11読書ページ。
- `/episodes/12/`：episode-12読書ページ。
- `/episodes/13/`：episode-13読書ページ。
- `/episodes/14/`：episode-14読書ページ。

本文ページは `site/contents/episodes/episode-XX.md` をブラウザから読み込み、MarkdownをHTMLへ変換して全文表示する。

### ローカル確認

HTMLファイルを直接開かず、リポジトリ直下でローカルサーバーを起動する。

```text
python -m http.server 4173
```

起動後、次を開く。

```text
http://localhost:4173/site/
```

### サイトへ新話を反映する

episode-04の場合：

1. `contents/episodes/episode-04.md` を `site/contents/episodes/episode-04.md` へ同内容でコピーする。
2. 二つのMarkdownが完全一致することを確認する。
3. `site/episodes/04/index.html` を既存話から複製する。
4. 話数、タイトル、description、canonical、`data-source`、前後リンクを更新する。
5. `site/index.html` のEPISODESと最新話導線へ追加する。
6. ローカルサーバー経由で本文全文、前後リンク、TOP導線を確認する。

### 公開

`site/` フォルダの中身だけで公開サイトが完結する。公開先のルートへ `site/` の中身をアップロードする。

画像参照：

- ヒーロー／キービジュアル：`site/img/key-visual.png`
- OGP：`site/img/og-image.png`

## READMEの更新方針

READMEはプロジェクトの入口と索引に保つ。新しい正史、伏線、現在地、文体ルールをREADMEへ追記して巨大化させない。内容に応じて `docs/series/` の適切な管理ファイルへ記録する。
