(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["example-control-example-control-module"],{

/***/ "./src/app/_base/extentions/validator-extension.ts":
/*!*********************************************************!*\
  !*** ./src/app/_base/extentions/validator-extension.ts ***!
  \*********************************************************/
/*! exports provided: NG_VALIDATORS, NG_ASYNC_VALIDATORS, ValidatorExtension, toObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorExtension", function() { return ValidatorExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObservable", function() { return toObservable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * @description
 * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
 *
 * @see `NG_ASYNC_VALIDATORS`
 *
 * @usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * @Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 * @publicApi
 */
// tslint:disable-next-line: ban-types
const NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgValidators');
/**
 * @description
 * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 * @publicApi
 */
const NG_ASYNC_VALIDATORS = 
// tslint:disable-next-line: ban-types
new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgAsyncValidators');
/**
 * A regular expression that matches valid e-mail addresses.
 *
 * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
 * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
 *   punctuation symbols).
 * - `local-part` cannot begin or end with a period (`.`).
 * - `local-part` cannot be longer than 64 characters.
 * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
 *   `foo.com`.
 * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
 *   periods (`.`)).
 * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
 * - A `label` cannot be longer than 63 characters.
 * - The whole address cannot be longer than 254 characters.
 *
 * ## Implementation background
 *
 * This regexp was ported over from AngularJS (see there for git history):
 * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
 * It is based on the
 * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
 * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
 * lengths of different parts of the address). The main differences from the WHATWG version are:
 *   - Disallow `local-part` to begin or end with a period (`.`).
 *   - Disallow `local-part` length to exceed 64 characters.
 *   - Disallow total address length to exceed 254 characters.
 *
 * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
 */
const EMAIL_REGEXP = 
// tslint:disable-next-line: max-line-length
/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const PHONE_REGEXP = /^(01|03|09|07|05|06)+([0-9]{8})\b$/;
const SPACE_REGEXP = /^\s+(?![^.])/;
const SPECIAL_REGEXP = /[!@#$%^&*()-+={}\[\]\/|<>/\\?*]/;
const s = /\s{2,}/g;
/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 * @publicApi
 */
class ValidatorExtension {
    /**
     * @description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    // static min(min: number): ValidatorFn {
    //   return (control: AbstractControl): ValidationErrors | null => {
    //     if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
    //       return null;  // don't validate empty values to allow optional controls
    //     }
    //     const value = parseFloat(control.value);
    //     // Controls with NaN values after parsing should be treated as not having a
    //     // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
    //     return !isNaN(value) && value < min ? { min: { min, actual: control.value } } : null;
    //   };
    // }
    static min(min, errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                return null; // don't validate empty values to allow optional controls
            }
            const value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
            return !isNaN(value) && value < min ? {
                error: errorMessage || `Giá trị tối thiểu là ${min}`,
                min: { min, actual: control.value }
            } : null;
        };
    }
    static minDate(min, errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                return null; // don't validate empty values to allow optional controls
            }
            const value = control.value;
            // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
            return value != null && value !== undefined && value < min ? {
                error: errorMessage || `Giá trị ngày tối thiểu là ${min}`,
                min: { min, actual: control.value }
            } : null;
        };
    }
    static maxDate(max, errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                return null; // don't validate empty values to allow optional controls
            }
            const value = control.value;
            // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
            return value != null && value !== undefined && value > max ? {
                error: errorMessage || `Giá trị ngày tối đa là ${max}`,
                min: { max, actual: control.value }
            } : null;
        };
    }
    /**
     * @description
     * Validator that requires the control's value to be less than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    // static max(max: number): ValidatorFn {
    //   return (control: AbstractControl): ValidationErrors | null => {
    //     if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
    //       return null;  // don't validate empty values to allow optional controls
    //     }
    //     const value = parseFloat(control.value);
    //     // Controls with NaN values after parsing should be treated as not having a
    //     // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
    //     return !isNaN(value) && value > max ? { max: { max, actual: control.value } } : null;
    //   };
    // }
    static max(max, errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                return null; // don't validate empty values to allow optional controls
            }
            const value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
            return !isNaN(value) && value > max ? {
                error: errorMessage || `Giá trị tối đa là ${max}`,
                max: { max, actual: control.value }
            } : null;
        };
    }
    /**
     * @description
     * Validator that requires the control have a non-empty value.
     *
     * @usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    // static required(control: AbstractControl): ValidationErrors | null {
    //   return isEmptyInputValue(control.value) ? { required: true } : null;
    // }
    static required(errorMessage) {
        return (control) => {
            return isEmptyInputValue(control.value) ? { error: errorMessage || 'Không được để trống', required: true } : null;
        };
    }
    static notWhiteSpace(errorMessage) {
        return (control) => {
            return (control.value || '').trim() === ''
                ? { error: errorMessage || 'Khoảng trắng là không hợp lệ', required: true }
                : null;
        };
    }
    /**
     * @description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * @usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    // static requiredTrue(control: AbstractControl): ValidationErrors | null {
    //   return control.value === true ? null : { required: true };
    // }
    static requiredTrue(errorMessage) {
        return (control) => {
            return control.value === true ? null : { error: errorMessage || 'Không được để trống', required: true };
        };
    }
    /**
     * @description
     * Validator that requires the control's value pass an email validation test.
     *
     * Tests the value using a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
     * pattern suitable for common usecases. The pattern is based on the definition of a valid email
     * address in the [WHATWG HTML specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address)
     * with some enhancements to incorporate more RFC rules (such as rules related to domain names and
     * the lengths of different parts of the address).
     *
     * The differences from the WHATWG version include:
     * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
     * - Disallow `local-part` to be longer than 64 characters.
     * - Disallow the whole address to be longer than 254 characters.
     *
     * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
     * validate the value against a different pattern.
     *
     * @usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    // static email(control: AbstractControl): ValidationErrors | null {
    //   if (isEmptyInputValue(control.value)) {
    //     return null;  // don't validate empty values to allow optional controls
    //   }
    //   return EMAIL_REGEXP.test(control.value) ? null : { email: true };
    // }
    static email(errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            return EMAIL_REGEXP.test(control.value) ? null : { error: errorMessage || 'Không đúng định dạng email', email: true };
        };
    }
    static phoneNumber(errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            return PHONE_REGEXP.test(control.value) ? null : { error: errorMessage || 'Không đúng định dạng số điện thoại', phoneNumber: true };
        };
    }
    /**
     * @description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    // static minLength(minLength: number): ValidatorFn {
    //   return (control: AbstractControl): ValidationErrors | null => {
    //     if (isEmptyInputValue(control.value)) {
    //       return null;  // don't validate empty values to allow optional controls
    //     }
    //     const length: number = control.value ? control.value.length : 0;
    //     return length < minLength ?
    //       { minlength: { requiredLength: minLength, actualLength: length } } :
    //       null;
    //   };
    // }
    static minLength(minLength, errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            const length = control.value ? control.value.length : 0;
            return length < minLength ?
                {
                    error: errorMessage || `Số ký tự tối thiểu là ${minLength}`,
                    minlength: { requiredLength: minLength, actualLength: length }
                } :
                null;
        };
    }
    /**
     * @description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    // static maxLength(maxLength: number): ValidatorFn {
    //   return (control: AbstractControl): ValidationErrors | null => {
    //     const length: number = control.value ? control.value.length : 0;
    //     return length > maxLength ?
    //       { maxlength: { requiredLength: maxLength, actualLength: length } } :
    //       null;
    //   };
    // }
    static maxLength(maxLength, errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            const length = control.value ? control.value.length : 0;
            return length > maxLength ?
                {
                    error: errorMessage || `Số ký tự tối đa là ${maxLength}`,
                    maxlength: { requiredLength: maxLength, actualLength: length }
                } :
                null;
        };
    }
    /**
     * @description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided by default if you use the HTML5 `pattern` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * @param pattern A regular expression to be used as is to test the values, or a string.
     * If a string is passed, the `^` character is prepended and the `$` character is
     * appended to the provided string (if not already present), and the resulting regular
     * expression is used to test the values.
     *
     * @returns A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    // static pattern(pattern: string | RegExp): ValidatorFn {
    //   if (!pattern) { return Validators.nullValidator; }
    //   let regex: RegExp;
    //   let regexStr: string;
    //   if (typeof pattern === 'string') {
    //     regexStr = '';
    //     if (pattern.charAt(0) !== '^') { regexStr += '^'; }
    //     regexStr += pattern;
    //     if (pattern.charAt(pattern.length - 1) !== '$') { regexStr += '$'; }
    //     regex = new RegExp(regexStr);
    //   } else {
    //     regexStr = pattern.toString();
    //     regex = pattern;
    //   }
    //   return (control: AbstractControl): ValidationErrors | null => {
    //     if (isEmptyInputValue(control.value)) {
    //       return null;  // don't validate empty values to allow optional controls
    //     }
    //     const value: string = control.value;
    //     return regex.test(value) ? null :
    //       { pattern: { requiredPattern: regexStr, actualValue: value } };
    //   };
    // }
    static pattern(pattern, errorMessage) {
        if (!pattern) {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator;
        }
        let regex;
        let regexStr;
        if (typeof pattern === 'string') {
            regexStr = '';
            if (pattern.charAt(0) !== '^') {
                regexStr += '^';
            }
            regexStr += pattern;
            if (pattern.charAt(pattern.length - 1) !== '$') {
                regexStr += '$';
            }
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            const value = control.value;
            return regex.test(value) ? null :
                {
                    error: errorMessage || 'Không đúng định dạng',
                    pattern: { requiredPattern: regexStr, actualValue: value }
                };
        };
    }
    /**
     * @description
     * Validator that performs no operation.
     *
     * @see `updateValueAndValidity()`
     *
     */
    static nullValidator(control) { return null; }
    static compose(validators) {
        if (!validators) {
            return null;
        }
        const presentValidators = validators.filter(isPresent);
        if (presentValidators.length === 0) {
            return null;
        }
        return (control) => {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    }
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    static composeAsync(validators) {
        if (!validators) {
            return null;
        }
        const presentValidators = validators.filter(isPresent);
        if (presentValidators.length === 0) {
            return null;
        }
        return (control) => {
            const observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
        };
    }
    // tslint:disable-next-line: max-line-length
    static compareValidator(nameControlTarget, errorMessage) {
        return (control) => {
            if (isEmptyInputValue(control.value)) {
                return { error: 'Không được để trống' };
            }
            const controlTarget = control.parent.get(nameControlTarget);
            if (controlTarget.value !== null && control.value !== controlTarget.value) {
                return { error: errorMessage };
            }
            return null;
        };
    }
    static existAsyncValidator(checkExist, errorMessage) {
        return (control) => new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (yield checkExist(control.value).toPromise()) {
                    observer.next({ error: errorMessage || 'Đã tồn tại', duplicated: true });
                }
                else {
                    observer.next(null);
                }
                observer.complete();
            }), 1000);
        });
    }
    static space(errorMessage) {
        return (control) => {
            if (control.value !== null && control.value !== '' && (SPACE_REGEXP.test(control.value))) {
                return { error: errorMessage || 'Không đúng định dạng ! ', space: true };
            }
            return null;
        };
    }
    static specialChar(errorMessage) {
        return (control) => {
            if (control.value !== null && control.value !== '' && (SPECIAL_REGEXP.test(control.value))) {
                return { error: errorMessage || 'Không hợp lệ !', special: true };
            }
            return null;
        };
    }
    static containsSpace(errorMessage) {
        return (control) => {
            if (control.value !== null && control.value !== '' && (/\s/.test(control.value))) {
                return { error: errorMessage || 'Không được chứa khoảng trắng ! ', space: true };
            }
            return null;
        };
    }
    static countNumber(min, max, errorMessage) {
        return (control) => {
            const value = control.value;
            const countNumber = value.replace(/[^0-9]/g, '').length;
            if (countNumber < min || countNumber > max) {
                return { error: errorMessage || `phải chứa từ ${min} đến ${max} số`, number: true };
            }
            return null;
        };
    }
    static countChar(min, max, errorMessage) {
        // đi kèm với validate ký tự đặc biệt
        return (control) => {
            const value = control.value;
            const countNumber = value.replace(/[0-9]/g, '').length;
            if (countNumber < min || countNumber > max) {
                return { error: errorMessage || `phải chứa từ ${min} đến ${max} chữ cái`, char: true };
            }
            return null;
        };
    }
    static checkFormatString(errorMessage) {
        // đi kèm với validate ký tự đặc biệt
        return (control) => {
            // const value: string = control.value;
            // const s15: string = value.substr(0, 5);
            // const s6: string = value.substr(5, 1);
            // const s7: string = value.substr(6, 1);
            //
            // const countNumber = value.replace(/[0-9]/g, '').length;
            // if (countNumber < min || countNumber > max) {
            //   return { error: errorMessage || `phải chứa từ ${min} đến ${max} chữ cái`, char: true };
            // }
            return null;
        };
    }
}
ValidatorExtension.eqFn = (ctrl, ctrlTarget) => ctrl.value === ctrlTarget.value;
ValidatorExtension.notEqFn = (ctrl, ctrlTarget) => ctrl.value !== ctrlTarget.value;
ValidatorExtension.gtFn = (ctrl, ctrlTarget) => ctrl.value > ctrlTarget.value;
ValidatorExtension.gteFn = (ctrl, ctrlTarget) => ctrl.value >= ctrlTarget.value;
ValidatorExtension.ltFn = (ctrl, ctrlTarget) => ctrl.value < ctrlTarget.value;
ValidatorExtension.lteFn = (ctrl, ctrlTarget) => ctrl.value <= ctrlTarget.value;
ValidatorExtension.gtDateFn = (ctrl, ctrlTarget) => new Date(ctrl.value)
    > new Date(ctrlTarget.value);
ValidatorExtension.gteDateFn = (ctrl, ctrlTarget) => new Date(ctrl.value)
    >= new Date(ctrlTarget.value);
ValidatorExtension.ltDateFn = (ctrl, ctrlTarget) => new Date(ctrl.value)
    < new Date(ctrlTarget.value);
ValidatorExtension.lteDateFn = (ctrl, ctrlTarget) => new Date(ctrl.value)
    <= new Date(ctrlTarget.value);
function isPresent(o) {
    return o != null;
}
function toObservable(r) {
    const obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;
    if (!(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵisObservable"])(obs))) {
        throw new Error(`Expected validator to return Promise or Observable.`);
    }
    return obs;
}
function _executeValidators(control, validators) {
    return validators.map(v => v(control));
}
function _executeAsyncValidators(control, validators) {
    return validators.map(v => v(control));
}
function _mergeErrors(arrayOfErrors) {
    const res = 
    // tslint:disable-next-line: no-shadowed-variable
    arrayOfErrors.reduce((res, errors) => {
        // tslint:disable-next-line: no-non-null-assertion
        return errors != null ? Object.assign(Object.assign({}, res), errors) : res;
    }, {});
    return Object.keys(res).length === 0 ? null : res;
}


/***/ }),

/***/ "./src/app/_base/services/message.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_base/services/message.service.ts ***!
  \***************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/notification */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-notification.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");




class MessageService {
    constructor(notification, message) {
        this.notification = notification;
        this.message = message;
    }
    showMessageSuccess(title = '', message = '') {
        this.notification
            .blank(title, message, { nzDuration: 3000 })
            .onClick.subscribe(() => {
            console.log('notification clicked!');
        });
    }
    notiMessageSuccess(content) {
        this.message.success(content);
    }
    notiMessageError(content) {
        if (content) {
            this.message.error(content);
        }
    }
    notiMessageWarning(content) {
        this.message.warning(content);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__["NzNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__["NzNotificationService"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/thiet-lap/example-control/example-control-dialog/example-control-dialog.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/thiet-lap/example-control/example-control-dialog/example-control-dialog.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ExampleControlDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleControlDialogComponent", function() { return ExampleControlDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var _base_controls_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../_base/controls/input-text/input-text.component */ "./src/app/_base/controls/input-text/input-text.component.ts");
/* harmony import */ var _base_controls_render_errors_render_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../_base/controls/render-errors/render-errors.component */ "./src/app/_base/controls/render-errors/render-errors.component.ts");










function ExampleControlDialogComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-render-errors", 14);
} if (rf & 2) {
    const control_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", control_r2);
} }
class ExampleControlDialogComponent {
    constructor(fb) {
        this.fb = fb;
        // tslint:disable-next-line:no-output-on-prefix
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            valueAddedServiceCode: ['', []],
            valueAddedServiceName: ['', []],
            description: [''],
        });
    }
    closeDialog() {
        this.onClose.emit();
    }
}
ExampleControlDialogComponent.ɵfac = function ExampleControlDialogComponent_Factory(t) { return new (t || ExampleControlDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ExampleControlDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleControlDialogComponent, selectors: [["app-example-control-dialog"]], outputs: { onClose: "onClose" }, decls: 23, vars: 4, consts: [["aria-label", "Close", 1, "ant-modal-close", "ng-star-inserted", 3, "click"], [1, "ant-modal-close-x"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 1, "anticon", "ant-modal-close-icon", "anticon-close"], [3, "nzSpinning"], ["nz-form", "", "novalidate", "", 3, "formGroup"], ["controlErrorTpl", ""], [1, "row"], [1, "col-md-6"], ["nzRequired", ""], [3, "nzErrorTip"], ["placeholder", "Nh\u1EADp m\u00E3 d\u1ECBch v\u1EE5 c\u1ED9ng th\u00EAm", "formControlName", "valueAddedServiceCode"], ["placeholder", "Nh\u1EADp t\u00EAn d\u1ECBch v\u1EE5 c\u1ED9ng th\u00EAm", "formControlName", "valueAddedServiceName"], [1, "text-center", "mt-2"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [3, "control"]], template: function ExampleControlDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleControlDialogComponent_Template_button_click_0_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-spin", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleControlDialogComponent_ng_template_5_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "M\u00E3 d\u1ECBch v\u1EE5 c\u1ED9ng th\u00EAm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-control", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "T\u00EAn d\u1ECBch v\u1EE5 c\u1ED9ng th\u00EAm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-form-control", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input-text", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleControlDialogComponent_Template_button_click_21_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0110\u00F3ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpinning", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzErrorTip", _r0);
    } }, directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_4__["NzSpinComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], _base_controls_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _base_controls_render_errors_render_errors_component__WEBPACK_IMPORTED_MODULE_8__["RenderErrorsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90aGlldC1sYXAvZXhhbXBsZS1jb250cm9sL2V4YW1wbGUtY29udHJvbC1kaWFsb2cvZXhhbXBsZS1jb250cm9sLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleControlDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-example-control-dialog',
                templateUrl: './example-control-dialog.component.html',
                styleUrls: ['./example-control-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/layout/thiet-lap/example-control/example-control-dialog/example-control-dialog.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/thiet-lap/example-control/example-control-dialog/example-control-dialog.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ExampleControlDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleControlDialogModule", function() { return ExampleControlDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _example_control_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example-control-dialog.component */ "./src/app/layout/thiet-lap/example-control/example-control-dialog/example-control-dialog.component.ts");
/* harmony import */ var _base_controls_share_controls_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_base/controls/share-controls.module */ "./src/app/_base/controls/share-controls.module.ts");





class ExampleControlDialogModule {
}
ExampleControlDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExampleControlDialogModule });
ExampleControlDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExampleControlDialogModule_Factory(t) { return new (t || ExampleControlDialogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _base_controls_share_controls_module__WEBPACK_IMPORTED_MODULE_3__["ShareControlsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExampleControlDialogModule, { declarations: [_example_control_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ExampleControlDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _base_controls_share_controls_module__WEBPACK_IMPORTED_MODULE_3__["ShareControlsModule"]], exports: [_example_control_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ExampleControlDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleControlDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _base_controls_share_controls_module__WEBPACK_IMPORTED_MODULE_3__["ShareControlsModule"],
                ],
                exports: [
                    _example_control_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ExampleControlDialogComponent"]
                ],
                declarations: [_example_control_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ExampleControlDialogComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/thiet-lap/example-control/example-control.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/thiet-lap/example-control/example-control.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ExampleControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleControlComponent", function() { return ExampleControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_base/services/dialog.service */ "./src/app/_base/services/dialog.service.ts");
/* harmony import */ var _example_control_dialog_example_control_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example-control-dialog/example-control-dialog.component */ "./src/app/layout/thiet-lap/example-control/example-control-dialog/example-control-dialog.component.ts");
/* harmony import */ var _base_extentions_validator_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_base/extentions/validator-extension */ "./src/app/_base/extentions/validator-extension.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _base_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_base/services/message.service */ "./src/app/_base/services/message.service.ts");
/* harmony import */ var _share_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_share/services/user.service */ "./src/app/_share/services/user.service.ts");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/divider */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var _base_controls_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../_base/controls/input-text/input-text.component */ "./src/app/_base/controls/input-text/input-text.component.ts");
/* harmony import */ var _base_controls_input_textarea_input_textarea_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../_base/controls/input-textarea/input-textarea.component */ "./src/app/_base/controls/input-textarea/input-textarea.component.ts");
/* harmony import */ var _base_controls_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../_base/controls/input-number/input-number.component */ "./src/app/_base/controls/input-number/input-number.component.ts");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _base_controls_render_errors_render_errors_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../_base/controls/render-errors/render-errors.component */ "./src/app/_base/controls/render-errors/render-errors.component.ts");




















function ExampleControlComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-render-errors", 14);
} if (rf & 2) {
    const control_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", control_r2);
} }
class ExampleControlComponent {
    constructor(fb, messageService, dialogService, userService) {
        this.fb = fb;
        this.messageService = messageService;
        this.dialogService = dialogService;
        this.userService = userService;
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            fullName: ['full name', [_base_extentions_validator_extension__WEBPACK_IMPORTED_MODULE_4__["ValidatorExtension"].required()]],
            note: ['note', [_base_extentions_validator_extension__WEBPACK_IMPORTED_MODULE_4__["ValidatorExtension"].required()]],
            number: [null, [_base_extentions_validator_extension__WEBPACK_IMPORTED_MODULE_4__["ValidatorExtension"].required()]],
        });
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.myForm.markAllAsDirty();
            if (this.myForm.invalid) {
                return;
            }
            this.myFormValueText = JSON.stringify(this.myForm.getRawValue());
        });
    }
    onDisable() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.myForm.disable();
        });
    }
    onEnable() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.myForm.enable();
        });
    }
    onBindError() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('onBindError');
            this.myForm.get('number').markAsDirty();
            this.myForm.get('number').setErrors({ error: 'Loi ne na' });
            // this.myForm.get('number').updateValueAndValidity();
            // this.myForm.markAllAsDirty();
            // this.myForm.bindError({
            //   text: ['loi ne']
            // });
            // this.myForm.markAsDirty();
            // this.myForm.updateValueAndValidity();
            console.log(this.myForm);
        });
    }
    onOpenDialog() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialog = this.dialogService.openDialog(option => {
                option.title = 'example crud';
                option.size = _base_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogSize"].medium;
                option.component = _example_control_dialog_example_control_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ExampleControlDialogComponent"];
                option.inputs = {
                    mode: _base_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogMode"].edit
                };
            }, (eventName) => {
                if (eventName === 'onClose') {
                    this.dialogService.closeDialogById(dialog.id);
                    // this.getData(this.paging);
                }
            });
        });
    }
}
ExampleControlComponent.ɵfac = function ExampleControlComponent_Factory(t) { return new (t || ExampleControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_share_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
ExampleControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExampleControlComponent, selectors: [["app-example-control"]], decls: 43, vars: 9, consts: [["nzOrientation", "left", "nzText", "Th\u00F4ng tin chung"], ["nz-form", "", "nz-form", "", "novalidate", "", 3, "formGroup", "ngSubmit"], ["controlErrorTpl", ""], [1, "row"], [1, "col-md-6"], ["nzRequired", ""], [3, "nzErrorTip"], ["placeholder", "H\u1ECD v\u00E0 t\u00EAn", "formControlName", "fullName"], ["placeholder", "Ghi ch\u00FA", "formControlName", "note"], ["nzRequired", "", "nzFor", "number", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], ["formControlName", "number"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "mr-2", 3, "click"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [3, "control"]], template: function ExampleControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ExampleControlComponent_Template_form_ngSubmit_1_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExampleControlComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "M\u00E3 d\u1ECBch v\u1EE5 c\u1ED9ng th\u00EAm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "note");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input-textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-form-control", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input-number", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExampleControlComponent_Template_button_click_24_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "get value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExampleControlComponent_Template_button_click_29_listener() { return ctx.onDisable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "disable all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExampleControlComponent_Template_button_click_33_listener() { return ctx.onEnable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "enable all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExampleControlComponent_Template_button_click_37_listener() { return ctx.onOpenDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Open dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExampleControlComponent_Template_button_click_41_listener() { return ctx.onBindError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "bind errors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.myFormValueText, " ");
    } }, directives: [ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__["NzDividerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormControlComponent"], _base_controls_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_11__["InputTextComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _base_controls_input_textarea_input_textarea_component__WEBPACK_IMPORTED_MODULE_12__["InputTextareaComponent"], _base_controls_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_13__["InputNumberComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], _base_controls_render_errors_render_errors_component__WEBPACK_IMPORTED_MODULE_17__["RenderErrorsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90aGlldC1sYXAvZXhhbXBsZS1jb250cm9sL2V4YW1wbGUtY29udHJvbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-example-control',
                templateUrl: './example-control.component.html',
                styleUrls: ['./example-control.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _base_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }, { type: _base_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }, { type: _share_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/thiet-lap/example-control/example-control.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/thiet-lap/example-control/example-control.module.ts ***!
  \****************************************************************************/
/*! exports provided: ExampleControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleControlModule", function() { return ExampleControlModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _example_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example-control.component */ "./src/app/layout/thiet-lap/example-control/example-control.component.ts");
/* harmony import */ var _example_control_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example-control.routing */ "./src/app/layout/thiet-lap/example-control/example-control.routing.ts");
/* harmony import */ var _base_controls_share_controls_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_base/controls/share-controls.module */ "./src/app/_base/controls/share-controls.module.ts");
/* harmony import */ var _example_control_dialog_example_control_dialog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example-control-dialog/example-control-dialog.module */ "./src/app/layout/thiet-lap/example-control/example-control-dialog/example-control-dialog.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class ExampleControlModule {
}
ExampleControlModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExampleControlModule });
ExampleControlModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExampleControlModule_Factory(t) { return new (t || ExampleControlModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _example_control_dialog_example_control_dialog_module__WEBPACK_IMPORTED_MODULE_5__["ExampleControlDialogModule"],
            _base_controls_share_controls_module__WEBPACK_IMPORTED_MODULE_4__["ShareControlsModule"],
            _example_control_routing__WEBPACK_IMPORTED_MODULE_3__["ExampleControlRouting"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExampleControlModule, { declarations: [_example_control_component__WEBPACK_IMPORTED_MODULE_2__["ExampleControlComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _example_control_dialog_example_control_dialog_module__WEBPACK_IMPORTED_MODULE_5__["ExampleControlDialogModule"],
        _base_controls_share_controls_module__WEBPACK_IMPORTED_MODULE_4__["ShareControlsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleControlModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _example_control_component__WEBPACK_IMPORTED_MODULE_2__["ExampleControlComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _example_control_dialog_example_control_dialog_module__WEBPACK_IMPORTED_MODULE_5__["ExampleControlDialogModule"],
                    _base_controls_share_controls_module__WEBPACK_IMPORTED_MODULE_4__["ShareControlsModule"],
                    _example_control_routing__WEBPACK_IMPORTED_MODULE_3__["ExampleControlRouting"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/thiet-lap/example-control/example-control.routing.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/thiet-lap/example-control/example-control.routing.ts ***!
  \*****************************************************************************/
/*! exports provided: ExampleControlRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleControlRouting", function() { return ExampleControlRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _example_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example-control.component */ "./src/app/layout/thiet-lap/example-control/example-control.component.ts");


const routes = [
    { path: '', component: _example_control_component__WEBPACK_IMPORTED_MODULE_1__["ExampleControlComponent"] }
];
const ExampleControlRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=example-control-example-control-module.js.map