import {Component} from '@angular/core';

@Component({
  selector: 'app-write-tests',
  templateUrl: './write-tests.component.html',
  styleUrls: ['./write-tests.component.scss']
})
export class WriteTestsComponent {

  code = `describe("The client routing API", () => {
    it("Generates URLs from plain, tree-like objects", () => {
        const api = buildRoutes(routes);
        expect(api.root.home.recent()).toEqual("/root/home/recent");
    });

    it("Processes route params", () => {
        const api = buildRoutes(routes);
        expect(api.root.articles.$articleId("7")()).toEqual("/root/articles/7");
        expect(api.root.articles.$articleId(7).edit()).toEqual("/root/articles/7/edit");
    });

    it("Allows overriding segment names for long or reserved strings", () => {
        const api = buildRoutes(routes);
        expect(api.root.override()).toEqual("/root/actual");
    });

    it("Throws an error if a reserved name is used for a route segment", () => {
        expect(() => buildRoutes({ name: {} })).toThrow(/You have used the reserved keywords "name" in your route/);
    });
});`;

}
