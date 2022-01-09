# gitbook图片插件

## 用途

通过点击图片或者链接来全屏显示图片

## 示例展示

![](./images/imgLayerShow.gif)

## 安装方式

- 在gitbook的`book.json`中配置

```json
{
    "plugins": [
        "img-layer"
    ]
}
```

- 简洁的图片链接方式：

使用 `{~` 和 `~}` （**正常使用没有空格**）包裹住图片的链接地址即可生成图片链接：

```
{~/images/imgLayerShow.gif~}
```