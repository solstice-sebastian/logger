"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const constants_1 = require("@solstice.sebastian/constants");
class Logger {
    constructor({ path = 'logger.log', namespace = '' }) {
        this.path = path;
        this.namespace = namespace;
    }
    toFile(args) {
        let text = args;
        if (typeof args !== 'string') {
            ({ text } = args);
        }
        const separator = constants_1.TEXT_SECTION_SEPARATOR;
        if (fs_1.default.existsSync(this.path) === false) {
            fs_1.default.writeFileSync(this.path, text, { encoding: 'utf8' });
        }
        fs_1.default.appendFileSync(this.path, text);
        fs_1.default.appendFileSync(this.path, separator);
    }
    ;
    log(args) {
        let text = args;
        if (typeof args !== 'string') {
            ({ text } = args);
        }
        if (process.env.ENVIRONMENT !== constants_1.Environment.TEST) {
            if (this.namespace !== '') {
                console.log(`${this.namespace}: ${text}`);
            }
            else {
                console.log(text);
            }
        }
    }
    ;
}
exports.Logger = Logger;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvREFBb0I7QUFDcEIsNkRBQW9GO0FBY3BGLE1BQU0sTUFBTTtJQUlWLFlBQVksRUFBRSxJQUFJLEdBQUcsWUFBWSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQWM7UUFDN0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUErQjtRQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsTUFBTSxTQUFTLEdBQUcsa0NBQXNCLENBQUM7UUFDekMsSUFBSSxZQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDdEMsWUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsWUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLFlBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQUEsQ0FBQztJQUVGLEdBQUcsQ0FBQyxJQUErQjtRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsS0FBSyx1QkFBVyxDQUFDLElBQUksRUFBRTtZQUNoRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFFO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkI7U0FDRjtJQUNILENBQUM7SUFBQSxDQUFDO0NBQ0g7QUFFUSx3QkFBTTtBQUZkLENBQUMifQ==