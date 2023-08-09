#!/bin/bash
# 防休眠命令
while true; do curl -s --user-agent "${UA_Browser}" "https://${REPL_SLUG}.${REPL_OWNER}.repl.co" >/dev/null 2>&1 && echo "$(date +'%Y%m%d%H%M%S') Keeping online ..." && sleep 600; done &
# 更新Memos
rm -rf memos && wget -O memos https://github.com/SinzMise/memos-on-replit/raw/main/memos.moe

# 启动Memos
echo "run memos >>> $(date '+%Y-%m-%d %H:%M:%S')"

chmod +x ./memos

# 数据库文件存放的地方
if [ ! -d ./db ];then
    mkdir ./db
fi

MEMOS_URL=https://${REPL_SLUG}.${REPL_OWNER}.repl.co

echo "click url: $MEMOS_URL"

./memos --data ./db --mode prod --port 6969
