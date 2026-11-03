export default class ProjectData {
    id: string;
    name: string;
    htmlDescription: string;
    iconUrl: string; // used as thumnail
    accentColor: string; // color of title bar
    engine: string; // engine badge shown on the thumbnail, e.g. "Unity" or "UE5"

    constructor(id: string, name: string, iconUrl: string, html: string, accentColor = "#000000", engine = ""){
        this.id = id;
        this.name = name;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.accentColor = accentColor;
        this.engine = engine;
    }
}
