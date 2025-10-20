import useModels from "../../hooks/useModels";
import ModelOption from "./ModelOption";

const labelClass = "block text-sm font-medium text-zinc-700 mb-1";
const inputClass =
  "w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline focus:outline-hidden";
const btnClass =
  "bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors";

export default function AdditionalSettings({ onSettings, settings }) {
  const { loading, models } = useModels();

  return (
    <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">Advanced Settings</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="model" className={labelClass}>
            Model
          </label>
          {loading.state ? (
            <p>{loading.message}</p>
          ) : (
            <select
              onChange={(e) =>
                onSettings({ ...settings, model: e.target.value })
              }
              className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              {models.length > 0 ? (
                models.map((item) => (
                  <ModelOption key={item} value={item}></ModelOption>
                ))
              ) : (
                <ModelOption value="No Models Found">
                  No Models Found
                </ModelOption>
              )}
            </select>
          )}
        </div>

        <div>
          <label htmlFor="seed" className={labelClass}>
            Seed (For reproducible results)
          </label>
          <input
            type="number"
            disabled="true"
            className={inputClass}
            placeholder="Random"
          />
        </div>

        <div>
          <label htmlFor="width" className={labelClass}>
            Width
          </label>
          <input
            type="number"
            onChange={(e) => onSettings({ ...settings, width: e.target.value })}
            value={settings.width}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="height" className={labelClass}>
            Height
          </label>
          <input
            type="number"
            onChange={(e) =>
              onSettings({ ...settings, height: e.target.value })
            }
            value={settings.height}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Aspect Ratio Presets</label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() =>
                onSettings({ ...settings, width: 1920, height: 1920 })
              }
              className={btnClass}
            >
              1:1
            </button>
            <button
              onClick={() =>
                onSettings({ ...settings, width: 1920, height: 1080 })
              }
              className={btnClass}
            >
              16:9
            </button>
            <button
              onClick={() =>
                onSettings({ ...settings, width: 1920, height: 1440 })
              }
              className={btnClass}
            >
              4:3
            </button>
            <button
              onClick={() =>
                onSettings({ ...settings, width: 1920, height: 1280 })
              }
              className={btnClass}
            >
              3:2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
