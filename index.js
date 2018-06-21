$(function () {

    //tree
    let setting = {
        data: {
            key: {
                title: "t"
            },
            simpleData: {
                enable: true
            }
        },
        view: {
            showLine: false
        },
        callback: {
            onClick: onClick
        }
    };
    let zNodes = window.index_url;
    function onClick(event, treeId, treeNode, clickFlag) {
        $('iframe').attr('src', treeNode.url);
        event.preventDefault();
    }

    $(document).ready(function () {

        //默认选中首篇文章
        $.fn.zTree.init($("#treeDemo"), setting, zNodes);
        let tree = $.fn.zTree.getZTreeObj('treeDemo');
        let nodes = tree.getNodesByParam("url", './2018.6/19/zwl.html', null);
        tree.selectNode(nodes[0], true, true, true);

        //滚动化
        $("#treeDemo").scrollBar();
        // $("#body-iframe").scrollBar();
    });
})