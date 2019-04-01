/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import Accessor = require("esri/core/Accessor");
import { declared, property } from "esri/core/accessorSupport/decorators";
import MapView = require("esri/views/MapView");

interface ILayerViewCount {
  name: string;
  count: number;
}

class FeatureCountViewModel extends declared(Accessor) {
  @property()
  public view: MapView;

  getCount(): Array<ILayerViewCount> {
    let output: Array<ILayerViewCount> = [];
    for (let i = 0; i < this.view.allLayerViews.length; i++) {
      let layerView = this.view.allLayerViews.getItemAt(i);
      output.push({
        name: layerView.layer.title,
        count: 0
      });
    }
    return output;
  }
}
export = FeatureCountViewModel;
