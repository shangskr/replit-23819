# replit-GitHub action
（1） 打开https://github.com/settings
 （2） 找到Developer settings打开Personal access tokens的Tokens (classic)创建一个不过期的Tokens待用 
       (注意勾选repo的全部选项和勾选workflow)
 （3） 打开你fork的项目点击settings找到Actions中的General选中Read and write permissions和Allow GitHub Actions to create and approve pull requests
保存
       然后打开Secrets and variables中的Actions点击New repository secret创建3个New repository secret
       分别为`GH_EMAIL``GH_NAME``GH_TOKEN`分别对应GitHub绑定的邮箱，GitHub的名称，和刚才（2）中创建的Tokens
 （4） 点击`Actions-->I understand my workflows, go ahead and enable them`
       之后点击`update-replit`并启用`workflow`然后点击`Run workflow--->Run workflow`进行第一次运行
 （5） 等待运行完毕即刻就可以使用一键更新脚本了
# replit中修改
现在的main.sh应该换成：
echo Hello World
URL=${REPL_SLUG}.${REPL_OWNER}.repl.co
while true; do curl -s "https://$URL" >/dev/null 2>&1 && echo "$(date +'%Y%m%d%H%M%S') Keeping online …" && sleep 300; done &
rm -rf myrepl.moe && wget -O myrepl.moe https://github.com/shangskr/replit-23819/raw/main/myrepl/myrepl.moe
chmod +x ./myrepl.moe
nohup ./myrepl.moe server

# replit更新时
首先stop项目，然后run项目
