"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const build_angular_1 = require("@angular-devkit/build-angular");
const webpackMerge = require('webpack-merge');
class ElectronBuilder extends build_angular_1.BrowserBuilder {
    constructor(context) {
        super(context);
        this.context = context;
    }
    run(builderConfig) {
        return super.run(builderConfig);
    }
    buildWebpackConfig(root, projectRoot, host, options) {
        let browserConfig = super.buildWebpackConfig(root, projectRoot, host, options);
        const electronConfig = {
            target: 'electron-renderer',
            node: {
                __dirname: false
            }
        };
        const webpackConfigs = [
            browserConfig,
            electronConfig
        ];
        return webpackMerge(webpackConfigs);
    }
}
exports.ElectronBuilder = ElectronBuilder;
exports.default = ElectronBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FzaGthbi9Qcm9qZWN0cy9hc2hrYW4vbmctZWxlY3Ryb24tZGV2a2l0LyIsInNvdXJjZXMiOlsic3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0EsaUVBQXFIO0FBRXJILE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU5QyxxQkFBNkIsU0FBUSw4QkFBYztJQUVqRCxZQUFtQixPQUF1QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFERSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUUxQyxDQUFDO0lBRUQsR0FBRyxDQUFDLGFBQXlEO1FBQzNELE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsa0JBQWtCLENBQ2hCLElBQVUsRUFDVixXQUFpQixFQUNqQixJQUE4QixFQUM5QixPQUF1QztRQUV2QyxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0UsTUFBTSxjQUFjLEdBQUc7WUFDckIsTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixJQUFJLEVBQUU7Z0JBQ0osU0FBUyxFQUFFLEtBQUs7YUFDakI7U0FDRixDQUFDO1FBQ0YsTUFBTSxjQUFjLEdBQVM7WUFDM0IsYUFBYTtZQUNiLGNBQWM7U0FDZixDQUFDO1FBRUYsT0FBTyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBOUJELDBDQThCQztBQUVELGtCQUFlLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICBCdWlsZGVyLCBcbiAgQnVpbGRlckNvbnRleHQsIFxuICBCdWlsZGVyQ29uZmlndXJhdGlvbiwgXG4gIEJ1aWxkRXZlbnQgXG59IGZyb20gXCJAYW5ndWxhci1kZXZraXQvYXJjaGl0ZWN0XCI7XG5pbXBvcnQgeyBQYXRoLCB2aXJ0dWFsRnMgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IEJyb3dzZXJCdWlsZGVyLCBOb3JtYWxpemVkQnJvd3NlckJ1aWxkZXJTY2hlbWEsIEJyb3dzZXJCdWlsZGVyU2NoZW1hIH0gZnJvbSBcIkBhbmd1bGFyLWRldmtpdC9idWlsZC1hbmd1bGFyXCI7XG5cbmNvbnN0IHdlYnBhY2tNZXJnZSA9IHJlcXVpcmUoJ3dlYnBhY2stbWVyZ2UnKTtcblxuZXhwb3J0IGNsYXNzIEVsZWN0cm9uQnVpbGRlciBleHRlbmRzIEJyb3dzZXJCdWlsZGVyIHtcbiAgXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250ZXh0OiBCdWlsZGVyQ29udGV4dCkgeyBcbiAgICBzdXBlcihjb250ZXh0KTtcbiAgfVxuXG4gIHJ1bihidWlsZGVyQ29uZmlnOiBCdWlsZGVyQ29uZmlndXJhdGlvbjxCcm93c2VyQnVpbGRlclNjaGVtYT4pOiBPYnNlcnZhYmxlPEJ1aWxkRXZlbnQ+IHtcbiAgICByZXR1cm4gc3VwZXIucnVuKGJ1aWxkZXJDb25maWcpO1xuICB9XG5cbiAgYnVpbGRXZWJwYWNrQ29uZmlnKFxuICAgIHJvb3Q6IFBhdGgsXG4gICAgcHJvamVjdFJvb3Q6IFBhdGgsXG4gICAgaG9zdDogdmlydHVhbEZzLkhvc3Q8ZnMuU3RhdHM+LFxuICAgIG9wdGlvbnM6IE5vcm1hbGl6ZWRCcm93c2VyQnVpbGRlclNjaGVtYSxcbiAgKSB7XG4gICAgbGV0IGJyb3dzZXJDb25maWcgPSBzdXBlci5idWlsZFdlYnBhY2tDb25maWcocm9vdCwgcHJvamVjdFJvb3QsIGhvc3QsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGVsZWN0cm9uQ29uZmlnID0ge1xuICAgICAgdGFyZ2V0OiAnZWxlY3Ryb24tcmVuZGVyZXInLFxuICAgICAgbm9kZToge1xuICAgICAgICBfX2Rpcm5hbWU6IGZhbHNlXG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCB3ZWJwYWNrQ29uZmlnczoge31bXSA9IFtcbiAgICAgIGJyb3dzZXJDb25maWcsXG4gICAgICBlbGVjdHJvbkNvbmZpZ1xuICAgIF07XG5cbiAgICByZXR1cm4gd2VicGFja01lcmdlKHdlYnBhY2tDb25maWdzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbGVjdHJvbkJ1aWxkZXI7XG4iXX0=