webpackJsonp([0],{

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembermodalPageModule", function() { return MembermodalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__membermodal__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MembermodalPageModule = (function () {
    function MembermodalPageModule() {
    }
    return MembermodalPageModule;
}());
MembermodalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__membermodal__["a" /* MembermodalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__membermodal__["a" /* MembermodalPage */]),
        ],
    })
], MembermodalPageModule);

//# sourceMappingURL=membermodal.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isDef = isDef;
exports.isJustDef = isJustDef;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isNonNullObject = isNonNullObject;
exports.isNonArrayObject = isNonArrayObject;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isNativeBlob = isNativeBlob;
exports.isNativeBlobDefined = isNativeBlobDefined;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @return False if the object is undefined or null, true otherwise.
 */
function isDef(p) {
    return p != null;
}
function isJustDef(p) {
    return p !== void 0;
}
function isFunction(p) {
    return typeof p === 'function';
}
function isObject(p) {
    return (typeof p === 'undefined' ? 'undefined' : _typeof(p)) === 'object';
}
function isNonNullObject(p) {
    return isObject(p) && p !== null;
}
function isNonArrayObject(p) {
    return isObject(p) && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isNumber(p) {
    return typeof p === 'number' || p instanceof Number;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}
//# sourceMappingURL=type.js.map


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Code = exports.errors = exports.FirebaseStorageError = undefined;
exports.prependCode = prependCode;
exports.unknown = unknown;
exports.objectNotFound = objectNotFound;
exports.bucketNotFound = bucketNotFound;
exports.projectNotFound = projectNotFound;
exports.quotaExceeded = quotaExceeded;
exports.unauthenticated = unauthenticated;
exports.unauthorized = unauthorized;
exports.retryLimitExceeded = retryLimitExceeded;
exports.invalidChecksum = invalidChecksum;
exports.canceled = canceled;
exports.invalidEventName = invalidEventName;
exports.invalidUrl = invalidUrl;
exports.invalidDefaultBucket = invalidDefaultBucket;
exports.noDefaultBucket = noDefaultBucket;
exports.cannotSliceBlob = cannotSliceBlob;
exports.serverFileWrongSize = serverFileWrongSize;
exports.noDownloadURL = noDownloadURL;
exports.invalidArgument = invalidArgument;
exports.invalidArgumentCount = invalidArgumentCount;
exports.appDeleted = appDeleted;
exports.invalidRootOperation = invalidRootOperation;
exports.invalidFormat = invalidFormat;
exports.internalError = internalError;

var _constants = __webpack_require__(413);

var FirebaseStorageError = function () {
    function FirebaseStorageError(code, message) {
        this.code_ = prependCode(code);
        this.message_ = 'Firebase Storage: ' + message;
        this.serverResponse_ = null;
        this.name_ = 'FirebaseError';
    }
    FirebaseStorageError.prototype.codeProp = function () {
        return this.code;
    };
    FirebaseStorageError.prototype.codeEquals = function (code) {
        return prependCode(code) === this.codeProp();
    };
    FirebaseStorageError.prototype.serverResponseProp = function () {
        return this.serverResponse_;
    };
    FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
        this.serverResponse_ = serverResponse;
    };
    Object.defineProperty(FirebaseStorageError.prototype, "name", {
        get: function get() {
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "code", {
        get: function get() {
            return this.code_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "message", {
        get: function get() {
            return this.message_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        get: function get() {
            return this.serverResponse_;
        },
        enumerable: true,
        configurable: true
    });
    return FirebaseStorageError;
}(); /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
exports.FirebaseStorageError = FirebaseStorageError;
var errors = exports.errors = {};
var Code = exports.Code = {
    // Shared between all platforms
    UNKNOWN: 'unknown',
    OBJECT_NOT_FOUND: 'object-not-found',
    BUCKET_NOT_FOUND: 'bucket-not-found',
    PROJECT_NOT_FOUND: 'project-not-found',
    QUOTA_EXCEEDED: 'quota-exceeded',
    UNAUTHENTICATED: 'unauthenticated',
    UNAUTHORIZED: 'unauthorized',
    RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
    INVALID_CHECKSUM: 'invalid-checksum',
    CANCELED: 'canceled',
    // JS specific
    INVALID_EVENT_NAME: 'invalid-event-name',
    INVALID_URL: 'invalid-url',
    INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
    NO_DEFAULT_BUCKET: 'no-default-bucket',
    CANNOT_SLICE_BLOB: 'cannot-slice-blob',
    SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
    NO_DOWNLOAD_URL: 'no-download-url',
    INVALID_ARGUMENT: 'invalid-argument',
    INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
    APP_DELETED: 'app-deleted',
    INVALID_ROOT_OPERATION: 'invalid-root-operation',
    INVALID_FORMAT: 'invalid-format',
    INTERNAL_ERROR: 'internal-error'
};
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    var message = 'An unknown error occurred, please check the error payload for ' + 'server response.';
    return new FirebaseStorageError(Code.UNKNOWN, message);
}
function objectNotFound(path) {
    return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function bucketNotFound(bucket) {
    return new FirebaseStorageError(Code.BUCKET_NOT_FOUND, "Bucket '" + bucket + "' does not exist.");
}
function projectNotFound(project) {
    return new FirebaseStorageError(Code.PROJECT_NOT_FOUND, "Project '" + project + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on " + 'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    var message = 'User is not authenticated, please authenticate using Firebase ' + 'Authentication and try again.';
    return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
}
function unauthorized(path) {
    return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
}
function invalidChecksum(path, checksum, calculated) {
    return new FirebaseStorageError(Code.INVALID_CHECKSUM, "Uploaded/downloaded object '" + path + "' has checksum '" + checksum + "' which does not match '" + calculated + "'. Please retry the upload/download.");
}
function canceled() {
    return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
}
function invalidEventName(name) {
    return new FirebaseStorageError(Code.INVALID_EVENT_NAME, "Invalid event name '" + name + "'.");
}
function invalidUrl(url) {
    return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
    return new FirebaseStorageError(Code.NO_DEFAULT_BUCKET, 'No default bucket ' + "found. Did you set the '" + _constants.configOption + "' property when initializing the app?");
}
function cannotSliceBlob() {
    return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
}
function invalidArgument(index, fnName, message) {
    return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
}
function invalidArgumentCount(argMin, argMax, fnName, real) {
    var countPart;
    var plural;
    if (argMin === argMax) {
        countPart = argMin;
        plural = argMin === 1 ? 'argument' : 'arguments';
    } else {
        countPart = 'between ' + argMin + ' and ' + argMax;
        plural = 'arguments';
    }
    return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' + fnName + '`: Expected ' + countPart + ' ' + plural + ', received ' + real + '.');
}
function appDeleted() {
    return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
}
/**
 * @param name The name of the operation that was invalid.
 */
function invalidRootOperation(name) {
    return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" + name + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
}
/**
 * @param format The format that was not valid.
 * @param message A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message A message describing the internal error.
 */
function internalError(message) {
    throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
}
//# sourceMappingURL=error.js.map


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = make;
exports.resolve = resolve;
exports.reject = reject;

var _promise = __webpack_require__(43);

function make(resolver) {
  return new _promise.PromiseImpl(resolver);
}
/**
 * @template T
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Implements the promise abstraction interface for external
 * (public SDK) packaging, which just passes through to the firebase-app impl.
 */
/**
 * @template T
 * @param {function((function(T): void),
 *                  (function(!Error): void))} resolver
 */
function resolve(value) {
  return _promise.PromiseImpl.resolve(value);
}
function reject(error) {
  return _promise.PromiseImpl.reject(error);
}
//# sourceMappingURL=promise_external.js.map


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contains = contains;
exports.forEach = forEach;
exports.clone = clone;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Contains methods for working with objects.
 */
function contains(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function forEach(obj, f) {
    for (var key in obj) {
        if (contains(obj, key)) {
            f(key, obj[key]);
        }
    }
}
function clone(obj) {
    if (obj == null) {
        return {};
    }
    var c = {};
    forEach(obj, function (key, val) {
        c[key] = val;
    });
    return c;
}
//# sourceMappingURL=object.js.map


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDomainBase = setDomainBase;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain and scheme for API calls.
 */
var domainBase = exports.domainBase = 'https://firebasestorage.googleapis.com';
/**
 * Domain and scheme for object downloads.
 */
var downloadBase = exports.downloadBase = 'https://firebasestorage.googleapis.com';
/**
 * Base URL for non-upload calls to the API.
 */
var apiBaseUrl = exports.apiBaseUrl = '/v0';
/**
 * Base URL for upload calls to the API.
 */
var apiUploadBaseUrl = exports.apiUploadBaseUrl = '/v0';
function setDomainBase(domainBase) {
  domainBase = domainBase;
}
var configOption = exports.configOption = 'storageBucket';
/**
 * 1 minute
 */
var shortMaxOperationRetryTime = exports.shortMaxOperationRetryTime = 1 * 60 * 1000;
/**
 * 2 minutes
 */
var defaultMaxOperationRetryTime = exports.defaultMaxOperationRetryTime = 2 * 60 * 1000;
/**
 * 10 minutes
 */
var defaultMaxUploadRetryTime = exports.defaultMaxUploadRetryTime = 10 * 60 * 100;
/**
 * This is the value of Number.MIN_SAFE_INTEGER, which is not well supported
 * enough for us to use it directly.
 */
var minSafeInteger = exports.minSafeInteger = -9007199254740991;
//# sourceMappingURL=constants.js.map


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Location = undefined;

var _error = __webpack_require__(410);

var errorsExports = _interopRequireWildcard(_error);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @struct
 */
var Location = function () {
    function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    Object.defineProperty(Location.prototype, "path", {
        get: function get() {
            return this.path_;
        },
        enumerable: true,
        configurable: true
    });
    Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    };
    Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    };
    Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString);
        } catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        } else {
            throw errorsExports.invalidDefaultBucket(bucketString);
        }
    };
    Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        var gsPath = '(/(.*))?$';
        var path = '(/([^?#]*).*)?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        var version = 'v[A-Za-z0-9_]+';
        var httpRegex = new RegExp('^https?://firebasestorage\\.googleapis\\.com/' + version + '/b/' + bucketDomain + '/o' + path, 'i');
        var httpIndices = { bucket: 1, path: 3 };
        var groups = [{ regex: gsRegex, indices: gsIndices, postModify: gsModify }, { regex: httpRegex, indices: httpIndices, postModify: httpModify }];
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);
            if (captures) {
                var bucketValue = captures[group.indices.bucket];
                var pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw errorsExports.invalidUrl(url);
        }
        return location;
    };
    return Location;
}(); /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
 * @fileoverview Functionality related to the parsing/composition of bucket/
 * object location.
 */
exports.Location = Location;
//# sourceMappingURL=location.js.map


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CODES = {
    AVAILABLE_IN_WINDOW: 'only-available-in-window',
    AVAILABLE_IN_SW: 'only-available-in-sw',
    SHOULD_BE_INHERITED: 'should-be-overriden',
    BAD_SENDER_ID: 'bad-sender-id',
    INCORRECT_GCM_SENDER_ID: 'incorrect-gcm-sender-id',
    PERMISSION_DEFAULT: 'permission-default',
    PERMISSION_BLOCKED: 'permission-blocked',
    UNSUPPORTED_BROWSER: 'unsupported-browser',
    NOTIFICATIONS_BLOCKED: 'notifications-blocked',
    FAILED_DEFAULT_REGISTRATION: 'failed-serviceworker-registration',
    SW_REGISTRATION_EXPECTED: 'sw-registration-expected',
    GET_SUBSCRIPTION_FAILED: 'get-subscription-failed',
    INVALID_SAVED_TOKEN: 'invalid-saved-token',
    SW_REG_REDUNDANT: 'sw-reg-redundant',
    TOKEN_SUBSCRIBE_FAILED: 'token-subscribe-failed',
    TOKEN_SUBSCRIBE_NO_TOKEN: 'token-subscribe-no-token',
    TOKEN_SUBSCRIBE_NO_PUSH_SET: 'token-subscribe-no-push-set',
    USE_SW_BEFORE_GET_TOKEN: 'use-sw-before-get-token',
    INVALID_DELETE_TOKEN: 'invalid-delete-token',
    DELETE_TOKEN_NOT_FOUND: 'delete-token-not-found',
    DELETE_SCOPE_NOT_FOUND: 'delete-scope-not-found',
    BG_HANDLER_FUNCTION_EXPECTED: 'bg-handler-function-expected',
    NO_WINDOW_CLIENT_TO_MSG: 'no-window-client-to-msg',
    UNABLE_TO_RESUBSCRIBE: 'unable-to-resubscribe',
    NO_FCM_TOKEN_FOR_RESUBSCRIBE: 'no-fcm-token-for-resubscribe',
    FAILED_TO_DELETE_TOKEN: 'failed-to-delete-token',
    NO_SW_IN_REG: 'no-sw-in-reg',
    BAD_SCOPE: 'bad-scope',
    BAD_VAPID_KEY: 'bad-vapid-key',
    BAD_SUBSCRIPTION: 'bad-subscription',
    BAD_TOKEN: 'bad-token',
    BAD_PUSH_SET: 'bad-push-set',
    FAILED_DELETE_VAPID_KEY: 'failed-delete-vapid-key'
};
var ERROR_MAP = (_a = {}, _a[CODES.AVAILABLE_IN_WINDOW] = 'This method is available in a Window context.', _a[CODES.AVAILABLE_IN_SW] = 'This method is available in a service worker ' + 'context.', _a[CODES.SHOULD_BE_INHERITED] = 'This method should be overriden by ' + 'extended classes.', _a[CODES.BAD_SENDER_ID] = "Please ensure that 'messagingSenderId' is set " + 'correctly in the options passed into firebase.initializeApp().', _a[CODES.PERMISSION_DEFAULT] = 'The required permissions were not granted and ' + 'dismissed instead.', _a[CODES.PERMISSION_BLOCKED] = 'The required permissions were not granted and ' + 'blocked instead.', _a[CODES.UNSUPPORTED_BROWSER] = "This browser doesn't support the API's " + 'required to use the firebase SDK.', _a[CODES.NOTIFICATIONS_BLOCKED] = 'Notifications have been blocked.', _a[CODES.FAILED_DEFAULT_REGISTRATION] = 'We are unable to register the ' + 'default service worker. {$browserErrorMessage}', _a[CODES.SW_REGISTRATION_EXPECTED] = 'A service worker registration was the ' + 'expected input.', _a[CODES.GET_SUBSCRIPTION_FAILED] = 'There was an error when trying to get ' + 'any existing Push Subscriptions.', _a[CODES.INVALID_SAVED_TOKEN] = 'Unable to access details of the saved token.', _a[CODES.SW_REG_REDUNDANT] = 'The service worker being used for push was made ' + 'redundant.', _a[CODES.TOKEN_SUBSCRIBE_FAILED] = 'A problem occured while subscribing the ' + 'user to FCM: {$message}', _a[CODES.TOKEN_SUBSCRIBE_NO_TOKEN] = 'FCM returned no token when subscribing ' + 'the user to push.', _a[CODES.TOKEN_SUBSCRIBE_NO_PUSH_SET] = 'FCM returned an invalid response ' + 'when getting an FCM token.', _a[CODES.USE_SW_BEFORE_GET_TOKEN] = 'You must call useServiceWorker() before ' + 'calling getToken() to ensure your service worker is used.', _a[CODES.INVALID_DELETE_TOKEN] = 'You must pass a valid token into ' + 'deleteToken(), i.e. the token from getToken().', _a[CODES.DELETE_TOKEN_NOT_FOUND] = 'The deletion attempt for token could not ' + 'be performed as the token was not found.', _a[CODES.DELETE_SCOPE_NOT_FOUND] = 'The deletion attempt for service worker ' + 'scope could not be performed as the scope was not found.', _a[CODES.BG_HANDLER_FUNCTION_EXPECTED] = 'The input to ' + 'setBackgroundMessageHandler() must be a function.', _a[CODES.NO_WINDOW_CLIENT_TO_MSG] = 'An attempt was made to message a ' + 'non-existant window client.', _a[CODES.UNABLE_TO_RESUBSCRIBE] = 'There was an error while re-subscribing ' + 'the FCM token for push messaging. Will have to resubscribe the ' + 'user on next visit. {$message}', _a[CODES.NO_FCM_TOKEN_FOR_RESUBSCRIBE] = 'Could not find an FCM token ' + 'and as a result, unable to resubscribe. Will have to resubscribe the ' + 'user on next visit.', _a[CODES.FAILED_TO_DELETE_TOKEN] = 'Unable to delete the currently saved token.', _a[CODES.NO_SW_IN_REG] = 'Even though the service worker registration was ' + 'successful, there was a problem accessing the service worker itself.', _a[CODES.INCORRECT_GCM_SENDER_ID] = "Please change your web app manifest's " + "'gcm_sender_id' value to '103953800507' to use Firebase messaging.", _a[CODES.BAD_SCOPE] = 'The service worker scope must be a string with at ' + 'least one character.', _a[CODES.BAD_VAPID_KEY] = 'The public VAPID key must be a string with at ' + 'least one character.', _a[CODES.BAD_SUBSCRIPTION] = 'The subscription must be a valid ' + 'PushSubscription.', _a[CODES.BAD_TOKEN] = 'The FCM Token used for storage / lookup was not ' + 'a valid token string.', _a[CODES.BAD_PUSH_SET] = 'The FCM push set used for storage / lookup was not ' + 'not a valid push set string.', _a[CODES.FAILED_DELETE_VAPID_KEY] = 'The VAPID key could not be deleted.', _a);
exports.default = {
    codes: CODES,
    map: ERROR_MAP
};

var _a;
module.exports = exports['default'];
//# sourceMappingURL=errors.js.map


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StringData = exports.StringFormat = undefined;
exports.formatValidator = formatValidator;
exports.dataFromString = dataFromString;
exports.utf8Bytes_ = utf8Bytes_;
exports.percentEncodedBytes_ = percentEncodedBytes_;
exports.base64Bytes_ = base64Bytes_;
exports.dataURLBytes_ = dataURLBytes_;
exports.dataURLContentType_ = dataURLContentType_;

var _error = __webpack_require__(410);

var errorsExports = _interopRequireWildcard(_error);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var StringFormat = exports.StringFormat = {
    RAW: 'raw',
    BASE64: 'base64',
    BASE64URL: 'base64url',
    DATA_URL: 'data_url'
}; /**
   * Copyright 2017 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
function formatValidator(stringFormat) {
    switch (stringFormat) {
        case StringFormat.RAW:
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
        case StringFormat.DATA_URL:
            return;
        default:
            throw 'Expected one of the event types: [' + StringFormat.RAW + ', ' + StringFormat.BASE64 + ', ' + StringFormat.BASE64URL + ', ' + StringFormat.DATA_URL + '].';
    }
}
/**
 * @struct
 */
var StringData = function () {
    function StringData(data, opt_contentType) {
        this.data = data;
        this.contentType = opt_contentType || null;
    }
    return StringData;
}();
exports.StringData = StringData;
function dataFromString(format, string) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(string));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, string));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(string), dataURLContentType_(string));
    }
    // assert(false);
    throw errorsExports.unknown();
}
function utf8Bytes_(string) {
    var b = [];
    for (var i = 0; i < string.length; i++) {
        var c = string.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        } else {
            if (c <= 2047) {
                b.push(192 | c >> 6, 128 | c & 63);
            } else {
                if ((c & 64512) == 55296) {
                    // The start of a surrogate pair.
                    var valid = i < string.length - 1 && (string.charCodeAt(i + 1) & 64512) == 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    } else {
                        var hi = c;
                        var lo = string.charCodeAt(++i);
                        c = 65536 | (hi & 1023) << 10 | lo & 1023;
                        b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
                    }
                } else {
                    if ((c & 64512) == 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    } else {
                        b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(string) {
    var decoded;
    try {
        decoded = decodeURIComponent(string);
    } catch (e) {
        throw errorsExports.invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, string) {
    switch (format) {
        case StringFormat.BASE64:
            {
                var hasMinus = string.indexOf('-') !== -1;
                var hasUnder = string.indexOf('_') !== -1;
                if (hasMinus || hasUnder) {
                    var invalidChar = hasMinus ? '-' : '_';
                    throw errorsExports.invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
                }
                break;
            }
        case StringFormat.BASE64URL:
            {
                var hasPlus = string.indexOf('+') !== -1;
                var hasSlash = string.indexOf('/') !== -1;
                if (hasPlus || hasSlash) {
                    var invalidChar = hasPlus ? '+' : '/';
                    throw errorsExports.invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
                }
                string = string.replace(/-/g, '+').replace(/_/g, '/');
                break;
            }
    }
    var bytes;
    try {
        bytes = atob(string);
    } catch (e) {
        throw errorsExports.invalidFormat(format, 'Invalid character found');
    }
    var array = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
/**
 * @struct
 */
var DataURLParts = function () {
    function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw errorsExports.invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        var middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64 ? middle.substring(0, middle.length - ';base64'.length) : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
    return DataURLParts;
}();
function dataURLBytes_(string) {
    var parts = new DataURLParts(string);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    } else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(string) {
    var parts = new DataURLParts(string);
    return parts.contentType;
}
function endsWith(s, end) {
    var longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}
//# sourceMappingURL=string.js.map


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArgSpec = undefined;
exports.validate = validate;
exports.and_ = and_;
exports.stringSpec = stringSpec;
exports.uploadDataSpec = uploadDataSpec;
exports.metadataSpec = metadataSpec;
exports.nonNegativeNumberSpec = nonNegativeNumberSpec;
exports.looseObjectSpec = looseObjectSpec;
exports.nullFunctionSpec = nullFunctionSpec;

var _error = __webpack_require__(410);

var errorsExports = _interopRequireWildcard(_error);

var _metadata = __webpack_require__(418);

var MetadataUtils = _interopRequireWildcard(_metadata);

var _type = __webpack_require__(409);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @param name Name of the function.
 * @param specs Argument specs.
 * @param passed The actual arguments passed to the function.
 * @throws {fbs.Error} If the arguments are invalid.
 */
function validate(name, specs, passed) {
    var minArgs = specs.length;
    var maxArgs = specs.length;
    for (var i = 0; i < specs.length; i++) {
        if (specs[i].optional) {
            minArgs = i;
            break;
        }
    }
    var validLength = minArgs <= passed.length && passed.length <= maxArgs;
    if (!validLength) {
        throw errorsExports.invalidArgumentCount(minArgs, maxArgs, name, passed.length);
    }
    for (var i = 0; i < passed.length; i++) {
        try {
            specs[i].validator(passed[i]);
        } catch (e) {
            if (e instanceof Error) {
                throw errorsExports.invalidArgument(i, name, e.message);
            } else {
                throw errorsExports.invalidArgument(i, name, e);
            }
        }
    }
}
/**
 * @struct
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ArgSpec = function () {
    function ArgSpec(validator, opt_optional) {
        var self = this;
        this.validator = function (p) {
            if (self.optional && !type.isJustDef(p)) {
                return;
            }
            validator(p);
        };
        this.optional = !!opt_optional;
    }
    return ArgSpec;
}();
exports.ArgSpec = ArgSpec;
function and_(v1, v2) {
    return function (p) {
        v1(p);
        v2(p);
    };
}
function stringSpec(opt_validator, opt_optional) {
    function stringValidator(p) {
        if (!type.isString(p)) {
            throw 'Expected string.';
        }
    }
    var validator;
    if (opt_validator) {
        validator = and_(stringValidator, opt_validator);
    } else {
        validator = stringValidator;
    }
    return new ArgSpec(validator, opt_optional);
}
function uploadDataSpec() {
    function validator(p) {
        var valid = p instanceof Uint8Array || p instanceof ArrayBuffer || type.isNativeBlobDefined() && p instanceof Blob;
        if (!valid) {
            throw 'Expected Blob or File.';
        }
    }
    return new ArgSpec(validator);
}
function metadataSpec(opt_optional) {
    return new ArgSpec(MetadataUtils.metadataValidator, opt_optional);
}
function nonNegativeNumberSpec() {
    function validator(p) {
        var valid = type.isNumber(p) && p >= 0;
        if (!valid) {
            throw 'Expected a number 0 or greater.';
        }
    }
    return new ArgSpec(validator);
}
function looseObjectSpec(opt_validator, opt_optional) {
    function validator(p) {
        var isLooseObject = p === null || type.isDef(p) && p instanceof Object;
        if (!isLooseObject) {
            throw 'Expected an Object.';
        }
        if (opt_validator !== undefined && opt_validator !== null) {
            opt_validator(p);
        }
    }
    return new ArgSpec(validator, opt_optional);
}
function nullFunctionSpec(opt_optional) {
    function validator(p) {
        var valid = p === null || type.isFunction(p);
        if (!valid) {
            throw 'Expected a Function.';
        }
    }
    return new ArgSpec(validator, opt_optional);
}
//# sourceMappingURL=args.js.map


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Mapping = undefined;
exports.noXform_ = noXform_;
exports.xformPath = xformPath;
exports.getMappings = getMappings;
exports.addRef = addRef;
exports.fromResource = fromResource;
exports.fromResourceString = fromResourceString;
exports.toResourceString = toResourceString;
exports.metadataValidator = metadataValidator;

var _json = __webpack_require__(437);

var json = _interopRequireWildcard(_json);

var _location = __webpack_require__(414);

var _path = __webpack_require__(424);

var path = _interopRequireWildcard(_path);

var _type = __webpack_require__(409);

var type = _interopRequireWildcard(_type);

var _url = __webpack_require__(419);

var UrlUtils = _interopRequireWildcard(_url);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function noXform_(metadata, value) {
    return value;
}
/**
 * @struct
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Mapping = function () {
    function Mapping(server, opt_local, opt_writable, opt_xform) {
        this.server = server;
        this.local = opt_local || server;
        this.writable = !!opt_writable;
        this.xform = opt_xform || noXform_;
    }
    return Mapping;
}();
exports.Mapping = Mapping;

var mappings_ = null;
function xformPath(fullPath) {
    var valid = type.isString(fullPath);
    if (!valid || fullPath.length < 2) {
        return fullPath;
    } else {
        fullPath = fullPath;
        return path.lastComponent(fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    var mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(metadata, fullPath) {
        return xformPath(fullPath);
    }
    var nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(metadata, size) {
        if (type.isDef(size)) {
            return +size;
        } else {
            return size;
        }
    }
    var sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    /**
     * Transforms a comma-separated string of tokens into a list of download
     * URLs.
     */
    function xformTokens(metadata, tokens) {
        var valid = type.isString(tokens) && tokens.length > 0;
        if (!valid) {
            // This can happen if objects are uploaded through GCS and retrieved
            // through list, so we don't want to throw an Error.
            return [];
        }
        var encode = encodeURIComponent;
        var tokensList = tokens.split(',');
        var urls = tokensList.map(function (token) {
            var bucket = metadata['bucket'];
            var path = metadata['fullPath'];
            var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
            var base = UrlUtils.makeDownloadUrl(urlPart);
            var queryString = UrlUtils.makeQueryString({
                alt: 'media',
                token: token
            });
            return base + queryString;
        });
        return urls;
    }
    mappings.push(new Mapping('downloadTokens', 'downloadURLs', false, xformTokens));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, authWrapper) {
    function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new _location.Location(bucket, path);
        return authWrapper.makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(authWrapper, resource, mappings) {
    var metadata = {};
    metadata['type'] = 'file';
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, authWrapper);
    return metadata;
}
function fromResourceString(authWrapper, resourceString, mappings) {
    var obj = json.jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromResource(authWrapper, resource, mappings);
}
function toResourceString(metadata, mappings) {
    var resource = {};
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
}
function metadataValidator(p) {
    var validType = p && type.isObject(p);
    if (!validType) {
        throw 'Expected Metadata object.';
    }
    for (var key in p) {
        var val = p[key];
        if (key === 'customMetadata') {
            if (!type.isObject(val)) {
                throw 'Expected object for \'customMetadata\' mapping.';
            }
        } else {
            if (type.isNonNullObject(val)) {
                throw "Mapping for '" + key + "' cannot be an object.";
            }
        }
    }
}
//# sourceMappingURL=metadata.js.map


/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.makeNormalUrl = makeNormalUrl;
exports.makeDownloadUrl = makeDownloadUrl;
exports.makeUploadUrl = makeUploadUrl;
exports.makeQueryString = makeQueryString;

var _constants = __webpack_require__(413);

var constants = _interopRequireWildcard(_constants);

var _object = __webpack_require__(412);

var object = _interopRequireWildcard(_object);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Functions to create and manipulate URLs for the server API.
 */
function makeNormalUrl(urlPart) {
    return constants.domainBase + constants.apiBaseUrl + urlPart;
}
function makeDownloadUrl(urlPart) {
    return constants.downloadBase + constants.apiBaseUrl + urlPart;
}
function makeUploadUrl(urlPart) {
    return constants.domainBase + constants.apiUploadBaseUrl + urlPart;
}
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    object.forEach(params, function (key, val) {
        var nextPart = encode(key) + '=' + encode(val);
        queryPart = queryPart + nextPart + '&';
    });
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}
//# sourceMappingURL=url.js.map


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contains = contains;
exports.clone = clone;
exports.remove = remove;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * Returns true if the object is contained in the array (compared with ===).
 * @template T
 */
function contains(array, elem) {
    return array.indexOf(elem) !== -1;
}
/**
 * Returns a shallow copy of the array or array-like object (e.g. arguments).
 * @template T
 */
function clone(arraylike) {
    return Array.prototype.slice.call(arraylike);
}
/**
 * Removes the given element from the given array, if it is contained.
 * Directly modifies the passed-in array.
 * @template T
 */
function remove(array, elem) {
    var i = array.indexOf(elem);
    if (i !== -1) {
        array.splice(i, 1);
    }
}
//# sourceMappingURL=array.js.map


/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.taskStateFromInternalTaskState = taskStateFromInternalTaskState;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var TaskEvent = exports.TaskEvent = {
    /** Triggered whenever the task changes or progress is updated. */
    STATE_CHANGED: 'state_changed'
};
var InternalTaskState = exports.InternalTaskState = {
    RUNNING: 'running',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELING: 'canceling',
    CANCELED: 'canceled',
    ERROR: 'error'
};
var TaskState = exports.TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
            return TaskState.RUNNING;
        case InternalTaskState.PAUSED:
            return TaskState.PAUSED;
        case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;
        case InternalTaskState.CANCELED:
            return TaskState.CANCELED;
        case InternalTaskState.ERROR:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}
//# sourceMappingURL=taskenums.js.map


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @enum{number}
 */
var ErrorCode = exports.ErrorCode = undefined;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
//# sourceMappingURL=xhrio.js.map


/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Reference = undefined;

var _args = __webpack_require__(417);

var args = _interopRequireWildcard(_args);

var _blob = __webpack_require__(425);

var _error = __webpack_require__(410);

var errorsExports = _interopRequireWildcard(_error);

var _location = __webpack_require__(414);

var _metadata = __webpack_require__(418);

var metadata = _interopRequireWildcard(_metadata);

var _object = __webpack_require__(412);

var object = _interopRequireWildcard(_object);

var _path = __webpack_require__(424);

var path = _interopRequireWildcard(_path);

var _requests = __webpack_require__(426);

var requests = _interopRequireWildcard(_requests);

var _string = __webpack_require__(416);

var fbsString = _interopRequireWildcard(_string);

var _type = __webpack_require__(409);

var type = _interopRequireWildcard(_type);

var _task = __webpack_require__(440);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @param location An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Defines the Firebase Storage Reference class.
 */
var Reference = function () {
    function Reference(authWrapper, location) {
        this.authWrapper = authWrapper;
        if (location instanceof _location.Location) {
            this.location = location;
        } else {
            this.location = _location.Location.makeFromUrl(location);
        }
    }
    /**
     * @return The URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    Reference.prototype.toString = function () {
        args.validate('toString', [], arguments);
        return 'gs://' + this.location.bucket + '/' + this.location.path;
    };
    Reference.prototype.newRef = function (authWrapper, location) {
        return new Reference(authWrapper, location);
    };
    Reference.prototype.mappings = function () {
        return metadata.getMappings();
    };
    /**
     * @return A reference to the object obtained by
     *     appending childPath, removing any duplicate, beginning, or trailing
     *     slashes.
     */
    Reference.prototype.child = function (childPath) {
        args.validate('child', [args.stringSpec()], arguments);
        var newPath = path.child(this.location.path, childPath);
        var location = new _location.Location(this.location.bucket, newPath);
        return this.newRef(this.authWrapper, location);
    };
    Object.defineProperty(Reference.prototype, "parent", {
        /**
         * @return A reference to the parent of the
         *     current object, or null if the current object is the root.
         */
        get: function get() {
            var newPath = path.parent(this.location.path);
            if (newPath === null) {
                return null;
            }
            var location = new _location.Location(this.location.bucket, newPath);
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "root", {
        /**
         * @return An reference to the root of this
         *     object's bucket.
         */
        get: function get() {
            var location = new _location.Location(this.location.bucket, '');
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "bucket", {
        get: function get() {
            return this.location.bucket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "fullPath", {
        get: function get() {
            return this.location.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "name", {
        get: function get() {
            return path.lastComponent(this.location.path);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "storage", {
        get: function get() {
            return this.authWrapper.service();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Uploads a blob to this object's location.
     * @param data The blob to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.put = function (data, metadata) {
        if (metadata === void 0) {
            metadata = null;
        }
        args.validate('put', [args.uploadDataSpec(), args.metadataSpec(true)], arguments);
        this.throwIfRoot_('put');
        return new _task.UploadTask(this, this.authWrapper, this.location, this.mappings(), new _blob.FbsBlob(data), metadata);
    };
    /**
     * Uploads a string to this object's location.
     * @param string The string to upload.
     * @param opt_format The format of the string to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.putString = function (string, format, opt_metadata) {
        if (format === void 0) {
            format = _string.StringFormat.RAW;
        }
        args.validate('putString', [args.stringSpec(), args.stringSpec(fbsString.formatValidator, true), args.metadataSpec(true)], arguments);
        this.throwIfRoot_('putString');
        var data = fbsString.dataFromString(format, string);
        var metadata = object.clone(opt_metadata);
        if (!type.isDef(metadata['contentType']) && type.isDef(data.contentType)) {
            metadata['contentType'] = data.contentType;
        }
        return new _task.UploadTask(this, this.authWrapper, this.location, this.mappings(), new _blob.FbsBlob(data.data, true), metadata);
    };
    /**
     * Deletes the object at this location.
     * @return A promise that resolves if the deletion succeeds.
     */
    Reference.prototype.delete = function () {
        args.validate('delete', [], arguments);
        this.throwIfRoot_('delete');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = requests.deleteObject(self.authWrapper, self.location);
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     *     A promise that resolves with the metadata for this object. If this
     *     object doesn't exist or metadata cannot be retreived, the promise is
     *     rejected.
     */
    Reference.prototype.getMetadata = function () {
        args.validate('getMetadata', [], arguments);
        this.throwIfRoot_('getMetadata');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = requests.getMetadata(self.authWrapper, self.location, self.mappings());
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * Updates the metadata for this object.
     * @param metadata The new metadata for the object.
     *     Only values that have been explicitly set will be changed. Explicitly
     *     setting a value to null will remove the metadata.
     * @return A promise that resolves
     *     with the new metadata for this object.
     *     @see firebaseStorage.Reference.prototype.getMetadata
     */
    Reference.prototype.updateMetadata = function (metadata) {
        args.validate('updateMetadata', [args.metadataSpec()], arguments);
        this.throwIfRoot_('updateMetadata');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = requests.updateMetadata(self.authWrapper, self.location, metadata, self.mappings());
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * @return A promise that resolves with the download
     *     URL for this object.
     */
    Reference.prototype.getDownloadURL = function () {
        args.validate('getDownloadURL', [], arguments);
        this.throwIfRoot_('getDownloadURL');
        return this.getMetadata().then(function (metadata) {
            var url = metadata['downloadURLs'][0];
            if (type.isDef(url)) {
                return url;
            } else {
                throw errorsExports.noDownloadURL();
            }
        });
    };
    Reference.prototype.throwIfRoot_ = function (name) {
        if (this.location.path === '') {
            throw errorsExports.invalidRootOperation(name);
        }
    };
    return Reference;
}();
exports.Reference = Reference;
//# sourceMappingURL=reference.js.map


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parent = parent;
exports.child = child;
exports.lastComponent = lastComponent;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function parent(path) {
    if (path.length == 0) {
        return null;
    }
    var index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    var newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    var canonicalChildPath = childPath.split('/').filter(function (component) {
        return component.length > 0;
    }).join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    } else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    var index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    } else {
        return path.slice(index + 1);
    }
}
//# sourceMappingURL=path.js.map


/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FbsBlob = undefined;

var _fs = __webpack_require__(438);

var fs = _interopRequireWildcard(_fs);

var _string = __webpack_require__(416);

var string = _interopRequireWildcard(_string);

var _type = __webpack_require__(409);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @param opt_elideCopy If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @file Provides a Blob-like wrapper for various binary types (including the
 * native Blob type). This makes it possible to upload types like ArrayBuffers,
 * making uploads possible in environments without the native Blob type.
 */
var FbsBlob = function () {
    function FbsBlob(data, opt_elideCopy) {
        var size = 0;
        var blobType = '';
        if (type.isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        } else if (data instanceof ArrayBuffer) {
            if (opt_elideCopy) {
                this.data_ = new Uint8Array(data);
            } else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        } else if (data instanceof Uint8Array) {
            if (opt_elideCopy) {
                this.data_ = data;
            } else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    FbsBlob.prototype.size = function () {
        return this.size_;
    };
    FbsBlob.prototype.type = function () {
        return this.type_;
    };
    FbsBlob.prototype.slice = function (startByte, endByte) {
        if (type.isNativeBlob(this.data_)) {
            var realBlob = this.data_;
            var sliced = fs.sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        } else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    };
    FbsBlob.getBlob = function () {
        var var_args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            var_args[_i] = arguments[_i];
        }
        if (type.isNativeBlobDefined()) {
            var blobby = var_args.map(function (val) {
                if (val instanceof FbsBlob) {
                    return val.data_;
                } else {
                    return val;
                }
            });
            return new FbsBlob(fs.getBlob.apply(null, blobby));
        } else {
            var uint8Arrays = var_args.map(function (val) {
                if (type.isString(val)) {
                    return string.dataFromString(_string.StringFormat.RAW, val).data;
                } else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
                finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
                for (var i = 0; i < array.length; i++) {
                    merged_1[index_1++] = array[i];
                }
            });
            return new FbsBlob(merged_1, true);
        }
    };
    FbsBlob.prototype.uploadData = function () {
        return this.data_;
    };
    return FbsBlob;
}();
exports.FbsBlob = FbsBlob;
//# sourceMappingURL=blob.js.map


/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resumableUploadChunkSize = exports.ResumableUploadStatus = undefined;
exports.handlerCheck = handlerCheck;
exports.metadataHandler = metadataHandler;
exports.sharedErrorHandler = sharedErrorHandler;
exports.objectErrorHandler = objectErrorHandler;
exports.getMetadata = getMetadata;
exports.updateMetadata = updateMetadata;
exports.deleteObject = deleteObject;
exports.determineContentType_ = determineContentType_;
exports.metadataForUpload_ = metadataForUpload_;
exports.multipartUpload = multipartUpload;
exports.checkResumeHeader_ = checkResumeHeader_;
exports.createResumableUpload = createResumableUpload;
exports.getResumableUploadStatus = getResumableUploadStatus;
exports.continueResumableUpload = continueResumableUpload;

var _array = __webpack_require__(420);

var array = _interopRequireWildcard(_array);

var _blob = __webpack_require__(425);

var _error = __webpack_require__(410);

var errorsExports = _interopRequireWildcard(_error);

var _metadata = __webpack_require__(418);

var MetadataUtils = _interopRequireWildcard(_metadata);

var _object = __webpack_require__(412);

var object = _interopRequireWildcard(_object);

var _requestinfo = __webpack_require__(439);

var _type = __webpack_require__(409);

var type = _interopRequireWildcard(_type);

var _url = __webpack_require__(419);

var UrlUtils = _interopRequireWildcard(_url);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function handlerCheck(cndn) {
    if (!cndn) {
        throw errorsExports.unknown();
    }
}
function metadataHandler(authWrapper, mappings) {
    function handler(xhr, text) {
        var metadata = MetadataUtils.fromResourceString(authWrapper, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        var newErr;
        if (xhr.getStatus() === 401) {
            newErr = errorsExports.unauthenticated();
        } else {
            if (xhr.getStatus() === 402) {
                newErr = errorsExports.quotaExceeded(location.bucket);
            } else {
                if (xhr.getStatus() === 403) {
                    newErr = errorsExports.unauthorized(location.path);
                } else {
                    newErr = err;
                }
            }
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    var shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = errorsExports.objectNotFound(location.path);
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function getMetadata(authWrapper, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = UrlUtils.makeNormalUrl(urlPart);
    var method = 'GET';
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new _requestinfo.RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata(authWrapper, location, metadata, mappings) {
    var urlPart = location.fullServerUrl();
    var url = UrlUtils.makeNormalUrl(urlPart);
    var method = 'PATCH';
    var body = MetadataUtils.toResourceString(metadata, mappings);
    var headers = { 'Content-Type': 'application/json; charset=utf-8' };
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new _requestinfo.RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject(authWrapper, location) {
    var urlPart = location.fullServerUrl();
    var url = UrlUtils.makeNormalUrl(urlPart);
    var method = 'DELETE';
    var timeout = authWrapper.maxOperationRetryTime();
    function handler(xhr, text) {}
    var requestInfo = new _requestinfo.RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return metadata && metadata['contentType'] || blob && blob.type() || 'application/octet-stream';
}
function metadataForUpload_(location, blob, opt_metadata) {
    var metadata = object.clone(opt_metadata);
    metadata['fullPath'] = location.path;
    metadata['size'] = blob.size();
    if (!metadata['contentType']) {
        metadata['contentType'] = determineContentType_(null, blob);
    }
    return metadata;
}
function multipartUpload(authWrapper, location, mappings, blob, opt_metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        var str = '';
        for (var i = 0; i < 2; i++) {
            str = str + Math.random().toString().slice(2);
        }
        return str;
    }
    var boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    var metadata = metadataForUpload_(location, blob, opt_metadata);
    var metadataString = MetadataUtils.toResourceString(metadata, mappings);
    var preBlobPart = '--' + boundary + '\r\n' + 'Content-Type: application/json; charset=utf-8\r\n\r\n' + metadataString + '\r\n--' + boundary + '\r\n' + 'Content-Type: ' + metadata['contentType'] + '\r\n\r\n';
    var postBlobPart = '\r\n--' + boundary + '--';
    var body = _blob.FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw errorsExports.cannotSliceBlob();
    }
    var urlParams = { name: metadata['fullPath'] };
    var url = UrlUtils.makeUploadUrl(urlPart);
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new _requestinfo.RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 * @struct
 */
var ResumableUploadStatus = function () {
    function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
    return ResumableUploadStatus;
}();
exports.ResumableUploadStatus = ResumableUploadStatus;
function checkResumeHeader_(xhr, opt_allowed) {
    var status;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    } catch (e) {
        handlerCheck(false);
    }
    var allowed = opt_allowed || ['active'];
    handlerCheck(array.contains(allowed, status));
    return status;
}
function createResumableUpload(authWrapper, location, mappings, blob, opt_metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var metadata = metadataForUpload_(location, blob, opt_metadata);
    var urlParams = { name: metadata['fullPath'] };
    var url = UrlUtils.makeUploadUrl(urlPart);
    var method = 'POST';
    var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadata['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    var body = MetadataUtils.toResourceString(metadata, mappings);
    var timeout = authWrapper.maxUploadRetryTime();
    function handler(xhr, text) {
        checkResumeHeader_(xhr);
        var url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        } catch (e) {
            handlerCheck(false);
        }
        handlerCheck(type.isString(url));
        return url;
    }
    var requestInfo = new _requestinfo.RequestInfo(url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(authWrapper, location, url, blob) {
    var headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr, text) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        } catch (e) {
            handlerCheck(false);
        }
        var size = parseInt(sizeString, 10);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new _requestinfo.RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
var resumableUploadChunkSize = exports.resumableUploadChunkSize = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param opt_status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, authWrapper, url, blob, chunkSize, mappings, opt_status, opt_progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    var status = new ResumableUploadStatus(0, 0);
    if (opt_status) {
        status.current = opt_status.current;
        status.total = opt_status.total;
    } else {
        status.current = 0;
        status.total = blob.size();
    }
    if (blob.size() !== status.total) {
        throw errorsExports.serverFileWrongSize();
    }
    var bytesLeft = status.total - status.current;
    var bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    var startByte = status.current;
    var endByte = startByte + bytesToUpload;
    var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status.current
    };
    var body = blob.slice(startByte, endByte);
    if (body === null) {
        throw errorsExports.cannotSliceBlob();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status.current + bytesToUpload;
        var size = blob.size();
        var metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(authWrapper, mappings)(xhr, text);
        } else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new _requestinfo.RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = opt_progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
//# sourceMappingURL=requests.js.map


/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errors = __webpack_require__(278);

var _errors2 = __webpack_require__(415);

var _errors3 = _interopRequireDefault(_errors2);

var _tokenManager = __webpack_require__(452);

var _tokenManager2 = _interopRequireDefault(_tokenManager);

var _notificationPermission = __webpack_require__(429);

var _notificationPermission2 = _interopRequireDefault(_notificationPermission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SENDER_ID_OPTION_NAME = 'messagingSenderId';
var ControllerInterface = function () {
    /**
     * An interface of the Messaging Service API
     * @param {!firebase.app.App} app
     */
    function ControllerInterface(app) {
        var _this = this;
        this.errorFactory_ = new _errors.ErrorFactory('messaging', 'Messaging', _errors3.default.map);
        if (!app.options[SENDER_ID_OPTION_NAME] || typeof app.options[SENDER_ID_OPTION_NAME] !== 'string') {
            throw this.errorFactory_.create(_errors3.default.codes.BAD_SENDER_ID);
        }
        this.messagingSenderId_ = app.options[SENDER_ID_OPTION_NAME];
        this.tokenManager_ = new _tokenManager2.default();
        this.app = app;
        this.INTERNAL = {};
        this.INTERNAL.delete = function () {
            return _this.delete;
        };
    }
    /**
     * @export
     * @return {Promise<string> | Promise<null>} Returns a promise that
     * resolves to an FCM token.
     */
    ControllerInterface.prototype.getToken = function () {
        var _this = this;
        // Check with permissions
        var currentPermission = this.getNotificationPermission_();
        if (currentPermission !== _notificationPermission2.default.granted) {
            if (currentPermission === _notificationPermission2.default.denied) {
                return Promise.reject(this.errorFactory_.create(_errors3.default.codes.NOTIFICATIONS_BLOCKED));
            }
            // We must wait for permission to be granted
            return Promise.resolve(null);
        }
        return this.getSWRegistration_().then(function (registration) {
            return _this.tokenManager_.getSavedToken(_this.messagingSenderId_, registration).then(function (token) {
                if (token) {
                    return token;
                }
                return _this.tokenManager_.createToken(_this.messagingSenderId_, registration);
            });
        });
    };
    /**
     * This method deletes tokens that the token manager looks after and then
     * unregisters the push subscription if it exists.
     * @export
     * @param {string} token
     * @return {Promise<void>}
     */
    ControllerInterface.prototype.deleteToken = function (token) {
        var _this = this;
        return this.tokenManager_.deleteToken(token).then(function () {
            return _this.getSWRegistration_().then(function (registration) {
                if (registration) {
                    return registration.pushManager.getSubscription();
                }
            }).then(function (subscription) {
                if (subscription) {
                    return subscription.unsubscribe();
                }
            });
        });
    };
    ControllerInterface.prototype.getSWRegistration_ = function () {
        throw this.errorFactory_.create(_errors3.default.codes.SHOULD_BE_INHERITED);
    };
    //
    // The following methods should only be available in the window.
    //
    ControllerInterface.prototype.requestPermission = function () {
        throw this.errorFactory_.create(_errors3.default.codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!ServiceWorkerRegistration} registration
     */
    ControllerInterface.prototype.useServiceWorker = function (registration) {
        throw this.errorFactory_.create(_errors3.default.codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!firebase.Observer|function(*)} nextOrObserver
     * @param {function(!Error)=} optError
     * @param {function()=} optCompleted
     * @return {!function()}
     */
    ControllerInterface.prototype.onMessage = function (nextOrObserver, optError, optCompleted) {
        throw this.errorFactory_.create(_errors3.default.codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!firebase.Observer|function()} nextOrObserver An observer object
     * or a function triggered on token refresh.
     * @param {function(!Error)=} optError Optional A function
     * triggered on token refresh error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    ControllerInterface.prototype.onTokenRefresh = function (nextOrObserver, optError, optCompleted) {
        throw this.errorFactory_.create(_errors3.default.codes.AVAILABLE_IN_WINDOW);
    };
    //
    // The following methods are used by the service worker only.
    //
    /**
     * @export
     * @param {function(Object)} callback
     */
    ControllerInterface.prototype.setBackgroundMessageHandler = function (callback) {
        throw this.errorFactory_.create(_errors3.default.codes.AVAILABLE_IN_SW);
    };
    //
    // The following methods are used by the service themselves and not exposed
    // publicly or not expected to be used by developers.
    //
    /**
     * This method is required to adhere to the Firebase interface.
     * It closes any currently open indexdb database connections.
     */
    ControllerInterface.prototype.delete = function () {
        this.tokenManager_.closeDatabase();
    };
    /**
     * Returns the current Notification Permission state.
     * @private
     * @return {string} The currenct permission state.
     */
    ControllerInterface.prototype.getNotificationPermission_ = function () {
        return Notification.permission;
    };
    /**
     * @protected
     * @returns {TokenManager}
     */
    ControllerInterface.prototype.getTokenManager = function () {
        return this.tokenManager_;
    };
    return ControllerInterface;
}();
exports.default = ControllerInterface;
module.exports = exports['default'];
//# sourceMappingURL=controller-interface.js.map


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FCM_APPLICATION_SERVER_KEY = [0x04, 0x33, 0x94, 0xf7, 0xdf, 0xa1, 0xeb, 0xb1, 0xdc, 0x03, 0xa2, 0x5e, 0x15, 0x71, 0xdb, 0x48, 0xd3, 0x2e, 0xed, 0xed, 0xb2, 0x34, 0xdb, 0xb7, 0x47, 0x3a, 0x0c, 0x8f, 0xc4, 0xcc, 0xe1, 0x6f, 0x3c, 0x8c, 0x84, 0xdf, 0xab, 0xb6, 0x66, 0x3e, 0xf2, 0x0c, 0xd4, 0x8b, 0xfe, 0xe3, 0xf9, 0x76, 0x2f, 0x14, 0x1c, 0x63, 0x08, 0x6a, 0x6f, 0x2d, 0xb1, 0x1a, 0x95, 0xb0, 0xce, 0x37, 0xc0, 0x9c, 0x6e];
var SUBSCRIPTION_DETAILS = {
    userVisibleOnly: true,
    applicationServerKey: new Uint8Array(FCM_APPLICATION_SERVER_KEY)
};
exports.default = {
    ENDPOINT: 'https://fcm.googleapis.com',
    APPLICATION_SERVER_KEY: FCM_APPLICATION_SERVER_KEY,
    SUBSCRIPTION_OPTIONS: SUBSCRIPTION_DETAILS
};
module.exports = exports['default'];
//# sourceMappingURL=fcm-details.js.map


/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    granted: 'granted',
    default: 'default',
    denied: 'denied'
};
module.exports = exports['default'];
//# sourceMappingURL=notification-permission.js.map


/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// These fields are strings to prevent closure from thinking goog.getMsg
// should be used to initialise the values

Object.defineProperty(exports, "__esModule", {
    value: true
});
var PARAMS = {
    TYPE_OF_MSG: 'firebase-messaging-msg-type',
    DATA: 'firebase-messaging-msg-data'
};
// This value isn't using the TYPE_OF_MSG short hand as closure
// expects the variable to be defined via goog.getMsg
var msgType = {
    PUSH_MSG_RECEIVED: 'push-msg-received',
    NOTIFICATION_CLICKED: 'notification-clicked'
};
var createNewMsg = function createNewMsg(msgType, msgData) {
    var message = (_a = {}, _a[PARAMS.TYPE_OF_MSG] = msgType, _a[PARAMS.DATA] = msgData, _a);
    return message;
    var _a;
};
exports.default = {
    PARAMS: PARAMS,
    TYPES_OF_MSG: msgType,
    createNewMsg: createNewMsg
};
module.exports = exports['default'];
//# sourceMappingURL=worker-page-message.js.map


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembermodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MembermodalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MembermodalPage = (function () {
    function MembermodalPage(navCtrl, navParams, firebaservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaservice = firebaservice;
        this.memberRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/members/');
        this.memberRef.on('value', function (searchList) {
            var mem = [];
            searchList.forEach(function (member) {
                mem.push(member.val());
                return false;
            });
            _this.searchList = mem;
            _this.loadedMemberList = mem;
        });
        //this.membersList = this.firebaservice.getmasterdb();
    }
    MembermodalPage.prototype.initializeItems = function () {
        this.searchList = this.loadedMemberList;
    };
    MembermodalPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.searchList = this.searchList.filter(function (v) {
            if (v.name && q) {
                if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.searchList.length);
    };
    MembermodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MembermodalPage');
    };
    return MembermodalPage;
}());
MembermodalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-membermodal',template:/*ion-inline-start:"C:\Users\JOELDACUMA\Documents\GitHub\YrockApp-Mobile\src\pages\membermodal\membermodal.html"*/'<!--\n  Generated template for the MembermodalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title style="text-align: center;">YROCK Members List</ion-title>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let member of searchList">\n       <ion-item>\n        <h2>{{member.name}} - {{member.category}}</h2>\n         <p></p>\n         <p>Ministry: {{member.ministry}}</p>\n         <p>YROCK location: {{member.location}}</p>\n       </ion-item>\n <!--       <ion-item-options side="right">\n          <button ion-button color="danger" icon-only (click)="deletemember(member.$key)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n-->\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\JOELDACUMA\Documents\GitHub\YrockApp-Mobile\src\pages\membermodal\membermodal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
], MembermodalPage);

//# sourceMappingURL=membermodal.js.map

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__(41);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(433);

__webpack_require__(42);

__webpack_require__(434);

__webpack_require__(450);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export the single instance of firebase
exports.default = _app2.default; /**
                                 * Copyright 2017 Google Inc.
                                 *
                                 * Licensed under the Apache License, Version 2.0 (the "License");
                                 * you may not use this file except in compliance with the License.
                                 * You may obtain a copy of the License at
                                 *
                                 *   http://www.apache.org/licenses/LICENSE-2.0
                                 *
                                 * Unless required by applicable law or agreed to in writing, software
                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                 * See the License for the specific language governing permissions and
                                 * limitations under the License.
                                 */

module.exports = exports['default'];
//# sourceMappingURL=firebase-browser.js.map


/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

var firebase = __webpack_require__(41);
(function(){(function(){var h,aa=aa||{},k=this,ba=function(a){return void 0!==a},m=function(a){return"string"==typeof a},ca=function(a){return"boolean"==typeof a},da=function(a){return"number"==typeof a},ea=function(){},fa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ha=function(a){return null===a},ia=function(a){return"array"==fa(a)},ja=function(a){var b=fa(a);return"array"==b||"object"==b&&"number"==typeof a.length},p=function(a){return"function"==fa(a)},q=function(a){var b=
typeof a;return"object"==b&&null!=a||"function"==b},ka=function(a,b,c){return a.call.apply(a.bind,arguments)},la=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return r.apply(null,
arguments)},ma=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},na=Date.now||function(){return+new Date},t=function(a,b){function c(){}c.prototype=b.prototype;a.Uc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Kg=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};t(u,Error);u.prototype.name="CustomError";var oa=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},xa=function(a){if(!qa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ra,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(sa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ta,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ua,"&quot;"));-1!=a.indexOf("'")&&
(a=a.replace(va,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(wa,"&#0;"));return a},ra=/&/g,sa=/</g,ta=/>/g,ua=/"/g,va=/'/g,wa=/\x00/g,qa=/[\x00&<>"']/,v=function(a,b){return-1!=a.indexOf(b)},ya=function(a,b){return a<b?-1:a>b?1:0};var za=function(a,b){b.unshift(a);u.call(this,oa.apply(null,b));b.shift()};t(za,u);za.prototype.name="AssertionError";
var Aa=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);throw new za(""+e,f||[]);},w=function(a,b,c){a||Aa("",null,b,Array.prototype.slice.call(arguments,2));return a},Ba=function(a,b){throw new za("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},Ca=function(a,b,c){da(a)||Aa("Expected number but got %s: %s.",[fa(a),a],b,Array.prototype.slice.call(arguments,2));return a},Da=function(a,b,c){m(a)||Aa("Expected string but got %s: %s.",[fa(a),
a],b,Array.prototype.slice.call(arguments,2))},Ea=function(a,b,c){p(a)||Aa("Expected function but got %s: %s.",[fa(a),a],b,Array.prototype.slice.call(arguments,2))};var Ga=function(){this.Tc="";this.df=Fa};Ga.prototype.ob=!0;Ga.prototype.mb=function(){return this.Tc};Ga.prototype.toString=function(){return"Const{"+this.Tc+"}"};var Ha=function(a){if(a instanceof Ga&&a.constructor===Ga&&a.df===Fa)return a.Tc;Ba("expected object of type Const, got '"+a+"'");return"type_error:Const"},Fa={},Ia=function(a){var b=new Ga;b.Tc=a;return b};Ia("");var Ka=function(){this.Mc="";this.ef=Ja};Ka.prototype.ob=!0;Ka.prototype.mb=function(){return this.Mc};Ka.prototype.toString=function(){return"TrustedResourceUrl{"+this.Mc+"}"};
var La=function(a){if(a instanceof Ka&&a.constructor===Ka&&a.ef===Ja)return a.Mc;Ba("expected object of type TrustedResourceUrl, got '"+a+"' of type "+fa(a));return"type_error:TrustedResourceUrl"},Na=function(a,b){a=Ma(a,b);b=new Ka;b.Mc=a;return b},Ma=function(a,b){var c=Ha(a);if(!Oa.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);return c.replace(Pa,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+
JSON.stringify(b));a=b[e];return a instanceof Ga?Ha(a):encodeURIComponent(String(a))})},Pa=/%{(\w+)}/g,Oa=/^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,Ja={};var Qa=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ra=function(a,b){for(var c=m(a)?
a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Sa=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=m(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ta=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
Va=function(a){a:{var b=Ua;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]},Wa=function(a,b){return 0<=Qa(a,b)},Ya=function(a,b){b=Qa(a,b);var c;(c=0<=b)&&Xa(a,b);return c},Xa=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},Za=function(a,b){var c=0;Ra(a,function(d,e){b.call(void 0,d,e,a)&&Xa(a,e)&&c++})},$a=function(a){return Array.prototype.concat.apply([],arguments)},
ab=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var bb=function(a){return Sa(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var cb;a:{var db=k.navigator;if(db){var eb=db.userAgent;if(eb){cb=eb;break a}}cb=""}var y=function(a){return v(cb,a)};var fb=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},gb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},hb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},ib=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},jb=function(a){for(var b in a)return!1;return!0},kb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},lb=function(a){var b={},c;for(c in a)b[c]=a[c];return b},mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
nb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var ob=function(a){ob[" "](a);return a};ob[" "]=ea;var qb=function(a,b){var c=pb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var rb=y("Opera"),z=y("Trident")||y("MSIE"),sb=y("Edge"),tb=sb||z,ub=y("Gecko")&&!(v(cb.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),vb=v(cb.toLowerCase(),"webkit")&&!y("Edge"),xb=function(){var a=k.document;return a?a.documentMode:void 0},yb;
a:{var zb="",Ab=function(){var a=cb;if(ub)return/rv\:([^\);]+)(\)|;)/.exec(a);if(sb)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(vb)return/WebKit\/(\S+)/.exec(a);if(rb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ab&&(zb=Ab?Ab[1]:"");if(z){var Bb=xb();if(null!=Bb&&Bb>parseFloat(zb)){yb=String(Bb);break a}}yb=zb}
var Cb=yb,pb={},A=function(a){return qb(a,function(){for(var b=0,c=pa(String(Cb)).split("."),d=pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==g[0].length&&0==l[0].length)break;b=ya(0==g[1].length?0:parseInt(g[1],10),0==l[1].length?0:parseInt(l[1],10))||ya(0==g[2].length,0==l[2].length)||ya(g[2],l[2]);g=g[3];l=l[3]}while(0==b)}return 0<=b})},Db;var Eb=k.document;
Db=Eb&&z?xb()||("CSS1Compat"==Eb.compatMode?parseInt(Cb,10):5):void 0;var Fb=null,Gb=null,Ib=function(a){var b="";Hb(a,function(a){b+=String.fromCharCode(a)});return b},Hb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=Gb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Jb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=l&&b(g<<6&192|l))}},Jb=function(){if(!Fb){Fb={};Gb={};for(var a=0;65>a;a++)Fb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
Gb[Fb[a]]=a,62<=a&&(Gb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var Kb=function(){this.Ca=-1};var Nb=function(a,b){this.Ca=-1;this.Ca=64;this.qc=k.Uint8Array?new Uint8Array(this.Ca):Array(this.Ca);this.Xc=this.pb=0;this.l=[];this.Yf=a;this.Ae=b;this.Ag=k.Int32Array?new Int32Array(64):Array(64);ba(Lb)||(Lb=k.Int32Array?new Int32Array(Mb):Mb);this.reset()},Lb;t(Nb,Kb);for(var Ob=[],Pb=0;63>Pb;Pb++)Ob[Pb]=0;var Qb=$a(128,Ob);Nb.prototype.reset=function(){this.Xc=this.pb=0;this.l=k.Int32Array?new Int32Array(this.Ae):ab(this.Ae)};
var Rb=function(a){var b=a.qc;w(b.length==a.Ca);for(var c=a.Ag,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0}d=a.l[0]|0;e=a.l[1]|0;var l=a.l[2]|0,n=a.l[3]|0,F=a.l[4]|0,wb=a.l[5]|0,gc=a.l[6]|0;f=a.l[7]|0;for(b=0;64>b;b++){var ri=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&l^e&l)|0;g=F&wb^~F&gc;f=f+((F>>>
6|F<<26)^(F>>>11|F<<21)^(F>>>25|F<<7))|0;g=g+(Lb[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=gc;gc=wb;wb=F;F=n+g|0;n=l;l=e;e=d;d=g+ri|0}a.l[0]=a.l[0]+d|0;a.l[1]=a.l[1]+e|0;a.l[2]=a.l[2]+l|0;a.l[3]=a.l[3]+n|0;a.l[4]=a.l[4]+F|0;a.l[5]=a.l[5]+wb|0;a.l[6]=a.l[6]+gc|0;a.l[7]=a.l[7]+f|0};
Nb.prototype.update=function(a,b){ba(b)||(b=a.length);var c=0,d=this.pb;if(m(a))for(;c<b;)this.qc[d++]=a.charCodeAt(c++),d==this.Ca&&(Rb(this),d=0);else if(ja(a))for(;c<b;){var e=a[c++];if(!("number"==typeof e&&0<=e&&255>=e&&e==(e|0)))throw Error("message must be a byte array");this.qc[d++]=e;d==this.Ca&&(Rb(this),d=0)}else throw Error("message must be string or array");this.pb=d;this.Xc+=b};
Nb.prototype.digest=function(){var a=[],b=8*this.Xc;56>this.pb?this.update(Qb,56-this.pb):this.update(Qb,this.Ca-(this.pb-56));for(var c=63;56<=c;c--)this.qc[c]=b&255,b/=256;Rb(this);for(c=b=0;c<this.Yf;c++)for(var d=24;0<=d;d-=8)a[b++]=this.l[c]>>d&255;return a};
var Mb=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var Tb=function(){Nb.call(this,8,Sb)};t(Tb,Nb);var Sb=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];var Ub=function(){this.La=this.La;this.Jc=this.Jc};Ub.prototype.La=!1;Ub.prototype.isDisposed=function(){return this.La};Ub.prototype.kb=function(){if(this.Jc)for(;this.Jc.length;)this.Jc.shift()()};var Vb=!z||9<=Number(Db),Wb=z&&!A("9");!vb||A("528");ub&&A("1.9b")||z&&A("8")||rb&&A("9.5")||vb&&A("528");ub&&!A("8")||z&&A("9");var Xb=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",ea,b);k.removeEventListener("test",ea,b);return a}();var B=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Va=!1;this.Ne=!0};B.prototype.stopPropagation=function(){this.Va=!0};B.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Ne=!1};var Yb=function(a,b){B.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.O=this.state=null;a&&this.init(a,b)};t(Yb,B);
Yb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(ub){a:{try{ob(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=vb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=vb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,
this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.O=a;a.defaultPrevented&&
this.preventDefault()};Yb.prototype.stopPropagation=function(){Yb.Uc.stopPropagation.call(this);this.O.stopPropagation?this.O.stopPropagation():this.O.cancelBubble=!0};Yb.prototype.preventDefault=function(){Yb.Uc.preventDefault.call(this);var a=this.O;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Wb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Yb.prototype.Bf=function(){return this.O};var Zb="closure_listenable_"+(1E6*Math.random()|0),$b=0;var ac=function(a,b,c,d,e){this.listener=a;this.Nc=null;this.src=b;this.type=c;this.capture=!!d;this.wc=e;this.key=++$b;this.Ab=this.pc=!1},bc=function(a){a.Ab=!0;a.listener=null;a.Nc=null;a.src=null;a.wc=null};var cc=function(a){this.src=a;this.J={};this.jc=0};cc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.J[f];a||(a=this.J[f]=[],this.jc++);var g=dc(a,b,d,e);-1<g?(b=a[g],c||(b.pc=!1)):(b=new ac(b,this.src,f,!!d,e),b.pc=c,a.push(b));return b};cc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.J))return!1;var e=this.J[a];b=dc(e,b,c,d);return-1<b?(bc(e[b]),Xa(e,b),0==e.length&&(delete this.J[a],this.jc--),!0):!1};
var ec=function(a,b){var c=b.type;c in a.J&&Ya(a.J[c],b)&&(bc(b),0==a.J[c].length&&(delete a.J[c],a.jc--))};cc.prototype.rd=function(a,b,c,d){a=this.J[a.toString()];var e=-1;a&&(e=dc(a,b,c,d));return-1<e?a[e]:null};cc.prototype.hasListener=function(a,b){var c=ba(a),d=c?a.toString():"",e=ba(b);return gb(this.J,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};
var dc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ab&&f.listener==b&&f.capture==!!c&&f.wc==d)return e}return-1};var fc="closure_lm_"+(1E6*Math.random()|0),hc={},ic=0,kc=function(a,b,c,d,e){if(d&&d.once)jc(a,b,c,d,e);else if(ia(b))for(var f=0;f<b.length;f++)kc(a,b[f],c,d,e);else c=lc(c),a&&a[Zb]?a.listen(b,c,q(d)?!!d.capture:!!d,e):mc(a,b,c,!1,d,e)},mc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=q(e)?!!e.capture:!!e,l=nc(a);l||(a[fc]=l=new cc(a));c=l.add(b,c,d,g,f);if(!c.Nc){d=oc();c.Nc=d;d.src=a;d.listener=c;if(a.addEventListener)Xb||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),
d,e);else if(a.attachEvent)a.attachEvent(pc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");ic++}},oc=function(){var a=qc,b=Vb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},jc=function(a,b,c,d,e){if(ia(b))for(var f=0;f<b.length;f++)jc(a,b[f],c,d,e);else c=lc(c),a&&a[Zb]?rc(a,b,c,q(d)?!!d.capture:!!d,e):mc(a,b,c,!0,d,e)},sc=function(a,b,c,d,e){if(ia(b))for(var f=0;f<b.length;f++)sc(a,b[f],c,d,
e);else d=q(d)?!!d.capture:!!d,c=lc(c),a&&a[Zb]?a.ga.remove(String(b),c,d,e):a&&(a=nc(a))&&(b=a.rd(b,c,d,e))&&tc(b)},tc=function(a){if(!da(a)&&a&&!a.Ab){var b=a.src;if(b&&b[Zb])ec(b.ga,a);else{var c=a.type,d=a.Nc;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(pc(c),d);ic--;(c=nc(b))?(ec(c,a),0==c.jc&&(c.src=null,b[fc]=null)):bc(a)}}},pc=function(a){return a in hc?hc[a]:hc[a]="on"+a},vc=function(a,b,c,d){var e=!0;if(a=nc(a))if(b=a.J[b.toString()])for(b=b.concat(),
a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Ab&&(f=uc(f,d),e=e&&!1!==f)}return e},uc=function(a,b){var c=a.listener,d=a.wc||a.src;a.pc&&tc(a);return c.call(d,b)},qc=function(a,b){if(a.Ab)return!0;if(!Vb){if(!b)a:{b=["window","event"];for(var c=k,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new Yb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=
b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.Va&&0<=e;e--){b.currentTarget=d[e];var f=vc(d[e],a,!0,b);c=c&&f}for(e=0;!b.Va&&e<d.length;e++)b.currentTarget=d[e],f=vc(d[e],a,!1,b),c=c&&f}return c}return uc(a,new Yb(b,this))},nc=function(a){a=a[fc];return a instanceof cc?a:null},wc="__closure_events_fn_"+(1E9*Math.random()>>>0),lc=function(a){w(a,"Listener can not be null.");if(p(a))return a;w(a.handleEvent,"An object listener must have handleEvent method.");a[wc]||(a[wc]=
function(b){return a.handleEvent(b)});return a[wc]};var xc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var zc=function(){this.xa="";this.cf=yc};zc.prototype.ob=!0;zc.prototype.mb=function(){return this.xa};zc.prototype.toString=function(){return"SafeUrl{"+this.xa+"}"};
var Ac=function(a){if(a instanceof zc&&a.constructor===zc&&a.cf===yc)return a.xa;Ba("expected object of type SafeUrl, got '"+a+"' of type "+fa(a));return"type_error:SafeUrl"},Bc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Dc=function(a){if(a instanceof zc)return a;a=a.ob?a.mb():String(a);Bc.test(a)||(a="about:invalid#zClosurez");return Cc(a)},yc={},Cc=function(a){var b=new zc;b.xa=a;return b};Cc("about:blank");var Gc=function(a){var b=[];Ec(new Fc,a,b);return b.join("")},Fc=function(){this.Oc=void 0},Ec=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ia(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Ec(a,a.Oc?a.Oc.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),
Hc(d,c),c.push(":"),Ec(a,a.Oc?a.Oc.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Hc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},Ic={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Jc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,
Hc=function(a,b){b.push('"',a.replace(Jc,function(a){var b=Ic[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ic[a]=b);return b}),'"')};var Kc=function(){};Kc.prototype.fe=null;var Lc=function(a){return a.fe||(a.fe=a.zd())};var Mc,Nc=function(){};t(Nc,Kc);Nc.prototype.rc=function(){var a=Oc(this);return a?new ActiveXObject(a):new XMLHttpRequest};Nc.prototype.zd=function(){var a={};Oc(this)&&(a[0]=!0,a[1]=!0);return a};
var Oc=function(a){if(!a.ze&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.ze=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.ze};Mc=new Nc;var Pc=function(){};t(Pc,Kc);Pc.prototype.rc=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Qc;throw Error("Unsupported browser");};Pc.prototype.zd=function(){return{}};
var Qc=function(){this.oa=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.oa.onload=r(this.Ff,this);this.oa.onerror=r(this.ue,this);this.oa.onprogress=r(this.Gf,this);this.oa.ontimeout=r(this.Hf,this)};h=Qc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.oa.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.oa.send(a);else throw Error("Only string data is supported");else this.oa.send()};h.abort=function(){this.oa.abort()};h.setRequestHeader=function(){};h.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.oa.contentType:""};h.Ff=function(){this.status=200;this.responseText=this.oa.responseText;Rc(this,4)};h.ue=function(){this.status=500;this.responseText="";Rc(this,4)};h.Hf=function(){this.ue()};
h.Gf=function(){this.status=200;Rc(this,1)};var Rc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};Qc.prototype.getAllResponseHeaders=function(){return"content-type: "+this.oa.contentType};var Sc=function(a,b,c){this.Uf=c;this.qf=a;this.ig=b;this.Ic=0;this.xc=null};Sc.prototype.get=function(){if(0<this.Ic){this.Ic--;var a=this.xc;this.xc=a.next;a.next=null}else a=this.qf();return a};Sc.prototype.put=function(a){this.ig(a);this.Ic<this.Uf&&(this.Ic++,a.next=this.xc,this.xc=a)};var Tc=function(a){k.setTimeout(function(){throw a;},0)},Uc,Vc=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;
a=r(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(ba(c.next)){c=c.next;var a=c.je;c.je=null;a()}};return function(a){d.next={je:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};var Wc=function(){this.bd=this.gb=null},Yc=new Sc(function(){return new Xc},function(a){a.reset()},100);Wc.prototype.add=function(a,b){var c=Yc.get();c.set(a,b);this.bd?this.bd.next=c:(w(!this.gb),this.gb=c);this.bd=c};Wc.prototype.remove=function(){var a=null;this.gb&&(a=this.gb,this.gb=this.gb.next,this.gb||(this.bd=null),a.next=null);return a};var Xc=function(){this.next=this.scope=this.qd=null};Xc.prototype.set=function(a,b){this.qd=a;this.scope=b;this.next=null};
Xc.prototype.reset=function(){this.next=this.scope=this.qd=null};var cd=function(a,b){Zc||$c();ad||(Zc(),ad=!0);bd.add(a,b)},Zc,$c=function(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);Zc=function(){a.then(dd)}}else Zc=function(){var a=dd;!p(k.setImmediate)||k.Window&&k.Window.prototype&&!y("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(Uc||(Uc=Vc()),Uc(a)):k.setImmediate(a)}},ad=!1,bd=new Wc,dd=function(){for(var a;a=bd.remove();){try{a.qd.call(a.scope)}catch(b){Tc(b)}Yc.put(a)}ad=!1};var ed=function(a){return q(a)?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):void 0===a?"undefined":null===a?"null":typeof a},fd=function(a){return(a=a&&a.ownerDocument)&&(a.defaultView||a.parentWindow)||k};var gd=!z||9<=Number(Db);!ub&&!z||z&&9<=Number(Db)||ub&&A("1.9.1");z&&A("9");var id=function(){this.xa="";this.bf=hd};id.prototype.ob=!0;id.prototype.mb=function(){return this.xa};id.prototype.toString=function(){return"SafeHtml{"+this.xa+"}"};var jd=function(a){if(a instanceof id&&a.constructor===id&&a.bf===hd)return a.xa;Ba("expected object of type SafeHtml, got '"+a+"' of type "+fa(a));return"type_error:SafeHtml"},hd={};id.prototype.Of=function(a){this.xa=a;return this};var kd=function(a,b){var c=fd(a);"undefined"!=typeof c.HTMLScriptElement&&"undefined"!=typeof c.Element&&w(a&&(a instanceof c.HTMLScriptElement||!(a instanceof c.Element)),"Argument is not a HTMLScriptElement (or a non-Element mock); got: %s",ed(a));a.src=La(b)};var ld=function(a){var b=document;return m(a)?b.getElementById(a):a},nd=function(a,b){fb(b,function(b,d){b&&b.ob&&(b=b.mb());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:md.hasOwnProperty(d)?a.setAttribute(md[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},md={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",
type:"type",usemap:"useMap",valign:"vAlign",width:"width"},pd=function(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!gd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',xa(g.name),'"');if(g.type){f.push(' type="',xa(g.type),'"');var l={};nb(l,g);delete l.type;g=l}f.push(">");f=f.join("")}f=e.createElement(f);g&&(m(g)?f.className=g:ia(g)?f.className=g.join(" "):nd(f,g));2<d.length&&od(e,f,d);return f},od=function(a,b,c){function d(c){c&&b.appendChild(m(c)?a.createTextNode(c):
c)}for(var e=2;e<c.length;e++){var f=c[e];!ja(f)||q(f)&&0<f.nodeType?d(f):x(qd(f)?ab(f):f,d)}},qd=function(a){if(a&&"number"==typeof a.length){if(q(a))return"function"==typeof a.item||"string"==typeof a.item;if(p(a))return"function"==typeof a.item}return!1};var rd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},sd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var C=function(a,b){this.aa=0;this.za=void 0;this.jb=this.ua=this.w=null;this.vc=this.od=!1;if(a!=ea)try{var c=this;a.call(b,function(a){td(c,2,a)},function(a){if(!(a instanceof ud))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}td(c,3,a)})}catch(d){td(this,3,d)}},vd=function(){this.next=this.context=this.rb=this.Ta=this.child=null;this.Gb=!1};vd.prototype.reset=function(){this.context=this.rb=this.Ta=this.child=null;this.Gb=!1};
var wd=new Sc(function(){return new vd},function(a){a.reset()},100),xd=function(a,b,c){var d=wd.get();d.Ta=a;d.rb=b;d.context=c;return d},D=function(a){if(a instanceof C)return a;var b=new C(ea);td(b,2,a);return b},E=function(a){return new C(function(b,c){c(a)})},zd=function(a,b,c){yd(a,b,c,null)||cd(ma(b,a))},Ad=function(a){return new C(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},l=0,n;l<a.length;l++)n=a[l],zd(n,ma(f,l),g);else b(e)})},
Bd=function(a){return new C(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{zf:!0,value:f}:{zf:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],zd(g,ma(e,f,!0),ma(e,f,!1));else b(d)})};C.prototype.then=function(a,b,c){null!=a&&Ea(a,"opt_onFulfilled should be a function.");null!=b&&Ea(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Cd(this,p(a)?a:null,p(b)?b:null,c)};rd(C);
var Ed=function(a,b){b=xd(b,b,void 0);b.Gb=!0;Dd(a,b);return a};C.prototype.f=function(a,b){return Cd(this,null,a,b)};C.prototype.cancel=function(a){0==this.aa&&cd(function(){var b=new ud(a);Fd(this,b)},this)};
var Fd=function(a,b){if(0==a.aa)if(a.w){var c=a.w;if(c.ua){for(var d=0,e=null,f=null,g=c.ua;g&&(g.Gb||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.aa&&1==d?Fd(c,b):(f?(d=f,w(c.ua),w(null!=d),d.next==c.jb&&(c.jb=d),d.next=d.next.next):Gd(c),Hd(c,e,3,b)))}a.w=null}else td(a,3,b)},Dd=function(a,b){a.ua||2!=a.aa&&3!=a.aa||Id(a);w(null!=b.Ta);a.jb?a.jb.next=b:a.ua=b;a.jb=b},Cd=function(a,b,c,d){var e=xd(null,null,null);e.child=new C(function(a,g){e.Ta=b?function(c){try{var e=b.call(d,
c);a(e)}catch(F){g(F)}}:a;e.rb=c?function(b){try{var e=c.call(d,b);!ba(e)&&b instanceof ud?g(b):a(e)}catch(F){g(F)}}:g});e.child.w=a;Dd(a,e);return e.child};C.prototype.wg=function(a){w(1==this.aa);this.aa=0;td(this,2,a)};C.prototype.xg=function(a){w(1==this.aa);this.aa=0;td(this,3,a)};
var td=function(a,b,c){0==a.aa&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.aa=1,yd(c,a.wg,a.xg,a)||(a.za=c,a.aa=b,a.w=null,Id(a),3!=b||c instanceof ud||Jd(a,c)))},yd=function(a,b,c,d){if(a instanceof C)return null!=b&&Ea(b,"opt_onFulfilled should be a function."),null!=c&&Ea(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Dd(a,xd(b||ea,c||null,d)),!0;if(sd(a))return a.then(b,c,d),!0;if(q(a))try{var e=a.then;if(p(e))return Kd(a,
e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Kd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},l=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,l)}catch(n){l(n)}},Id=function(a){a.od||(a.od=!0,cd(a.vf,a))},Gd=function(a){var b=null;a.ua&&(b=a.ua,a.ua=b.next,b.next=null);a.ua||(a.jb=null);null!=b&&w(null!=b.Ta);return b};C.prototype.vf=function(){for(var a;a=Gd(this);)Hd(this,a,this.aa,this.za);this.od=!1};
var Hd=function(a,b,c,d){if(3==c&&b.rb&&!b.Gb)for(;a&&a.vc;a=a.w)a.vc=!1;if(b.child)b.child.w=null,Ld(b,c,d);else try{b.Gb?b.Ta.call(b.context):Ld(b,c,d)}catch(e){Md.call(null,e)}wd.put(b)},Ld=function(a,b,c){2==b?a.Ta.call(a.context,c):a.rb&&a.rb.call(a.context,c)},Jd=function(a,b){a.vc=!0;cd(function(){a.vc&&Md.call(null,b)})},Md=Tc,ud=function(a){u.call(this,a)};t(ud,u);ud.prototype.name="cancel";
var Nd=function(a,b){this.Qc=[];this.He=a;this.ne=b||null;this.Ob=this.lb=!1;this.za=void 0;this.Yd=this.de=this.fd=!1;this.Yc=0;this.w=null;this.gd=0};Nd.prototype.cancel=function(a){if(this.lb)this.za instanceof Nd&&this.za.cancel();else{if(this.w){var b=this.w;delete this.w;a?b.cancel(a):(b.gd--,0>=b.gd&&b.cancel())}this.He?this.He.call(this.ne,this):this.Yd=!0;this.lb||Od(this,new Pd)}};Nd.prototype.le=function(a,b){this.fd=!1;Qd(this,a,b)};
var Qd=function(a,b,c){a.lb=!0;a.za=c;a.Ob=!b;Rd(a)},Td=function(a){if(a.lb){if(!a.Yd)throw new Sd;a.Yd=!1}};Nd.prototype.callback=function(a){Td(this);Ud(a);Qd(this,!0,a)};var Od=function(a,b){Td(a);Ud(b);Qd(a,!1,b)},Ud=function(a){w(!(a instanceof Nd),"An execution sequence may not be initiated with a blocking Deferred.")},Wd=function(a,b){Vd(a,null,b,void 0)},Vd=function(a,b,c,d){w(!a.de,"Blocking Deferreds can not be re-used");a.Qc.push([b,c,d]);a.lb&&Rd(a)};
Nd.prototype.then=function(a,b,c){var d,e,f=new C(function(a,b){d=a;e=b});Vd(this,d,function(a){a instanceof Pd?f.cancel():e(a)});return f.then(a,b,c)};rd(Nd);
var Xd=function(a){return Ta(a.Qc,function(a){return p(a[1])})},Rd=function(a){if(a.Yc&&a.lb&&Xd(a)){var b=a.Yc,c=Yd[b];c&&(k.clearTimeout(c.Pb),delete Yd[b]);a.Yc=0}a.w&&(a.w.gd--,delete a.w);b=a.za;for(var d=c=!1;a.Qc.length&&!a.fd;){var e=a.Qc.shift(),f=e[0],g=e[1];e=e[2];if(f=a.Ob?g:f)try{var l=f.call(e||a.ne,b);ba(l)&&(a.Ob=a.Ob&&(l==b||l instanceof Error),a.za=b=l);if(sd(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.fd=!0}catch(n){b=n,a.Ob=!0,Xd(a)||(c=!0)}}a.za=b;d&&(l=r(a.le,
a,!0),d=r(a.le,a,!1),b instanceof Nd?(Vd(b,l,d),b.de=!0):b.then(l,d));c&&(b=new Zd(b),Yd[b.Pb]=b,a.Yc=b.Pb)},Sd=function(){u.call(this)};t(Sd,u);Sd.prototype.message="Deferred has already fired";Sd.prototype.name="AlreadyCalledError";var Pd=function(){u.call(this)};t(Pd,u);Pd.prototype.message="Deferred was canceled";Pd.prototype.name="CanceledError";var Zd=function(a){this.Pb=k.setTimeout(r(this.vg,this),0);this.ba=a};
Zd.prototype.vg=function(){w(Yd[this.Pb],"Cannot throw an error that is not scheduled.");delete Yd[this.Pb];throw this.ba;};var Yd={};var de=function(a){var b={},c=b.document||document,d=La(a),e=document.createElement("SCRIPT"),f={Oe:e,ic:void 0},g=new Nd($d,f),l=null,n=null!=b.timeout?b.timeout:5E3;0<n&&(l=window.setTimeout(function(){ae(e,!0);Od(g,new be(1,"Timeout reached for loading script "+d))},n),f.ic=l);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(ae(e,b.Lg||!1,l),g.callback(null))};e.onerror=function(){ae(e,!0,l);Od(g,new be(0,"Error while loading script "+d))};
f=b.attributes||{};nb(f,{type:"text/javascript",charset:"UTF-8"});nd(e,f);kd(e,a);ce(c).appendChild(e);return g},ce=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},$d=function(){if(this&&this.Oe){var a=this.Oe;a&&"SCRIPT"==a.tagName&&ae(a,!0,this.ic)}},ae=function(a,b,c){null!=c&&k.clearTimeout(c);a.onload=ea;a.onerror=ea;a.onreadystatechange=ea;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},be=function(a,
b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a};t(be,u);var ee=function(a,b,c,d,e){this.reset(a,b,c,d,e)};ee.prototype.pe=null;var fe=0;ee.prototype.reset=function(a,b,c,d,e){"number"==typeof e||fe++;d||na();this.Ub=a;this.Xf=b;delete this.pe};ee.prototype.Qe=function(a){this.Ub=a};var ge=function(a){this.Fe=a;this.ve=this.jd=this.Ub=this.w=null},he=function(a,b){this.name=a;this.value=b};he.prototype.toString=function(){return this.name};var ie=new he("SEVERE",1E3),je=new he("INFO",800),ke=new he("CONFIG",700),le=new he("FINE",500);ge.prototype.getName=function(){return this.Fe};ge.prototype.getParent=function(){return this.w};ge.prototype.Qe=function(a){this.Ub=a};var me=function(a){if(a.Ub)return a.Ub;if(a.w)return me(a.w);Ba("Root logger has no level set.");return null};
ge.prototype.log=function(a,b,c){if(a.value>=me(this).value)for(p(b)&&(b=b()),a=new ee(a,String(b),this.Fe),c&&(a.pe=c),c="log:"+a.Xf,(b=k.console)&&b.timeStamp&&b.timeStamp(c),(b=k.msWriteProfilerMark)&&b(c),c=this;c;){var d=c,e=a;if(d.ve)for(var f=0;b=d.ve[f];f++)b(e);c=c.getParent()}};ge.prototype.info=function(a,b){this.log(je,a,b)};ge.prototype.config=function(a,b){this.log(ke,a,b)};
var ne={},oe=null,pe=function(a){oe||(oe=new ge(""),ne[""]=oe,oe.Qe(ke));var b;if(!(b=ne[a])){b=new ge(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=pe(a.substr(0,c));c.jd||(c.jd={});c.jd[d]=b;b.w=c;ne[a]=b}return b};var G=function(){Ub.call(this);this.ga=new cc(this);this.gf=this;this.Hd=null};t(G,Ub);G.prototype[Zb]=!0;h=G.prototype;h.addEventListener=function(a,b,c,d){kc(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){sc(this,a,b,c,d)};
h.dispatchEvent=function(a){qe(this);var b=this.Hd;if(b){var c=[];for(var d=1;b;b=b.Hd)c.push(b),w(1E3>++d,"infinite loop")}b=this.gf;d=a.type||a;if(m(a))a=new B(a,b);else if(a instanceof B)a.target=a.target||b;else{var e=a;a=new B(d,b);nb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.Va&&0<=f;f--){var g=a.currentTarget=c[f];e=re(g,d,!0,a)&&e}a.Va||(g=a.currentTarget=b,e=re(g,d,!0,a)&&e,a.Va||(e=re(g,d,!1,a)&&e));if(c)for(f=0;!a.Va&&f<c.length;f++)g=a.currentTarget=c[f],e=re(g,d,!1,a)&&e;return e};
h.kb=function(){G.Uc.kb.call(this);if(this.ga){var a=this.ga,b=0,c;for(c in a.J){for(var d=a.J[c],e=0;e<d.length;e++)++b,bc(d[e]);delete a.J[c];a.jc--}}this.Hd=null};h.listen=function(a,b,c,d){qe(this);return this.ga.add(String(a),b,!1,c,d)};
var rc=function(a,b,c,d,e){a.ga.add(String(b),c,!0,d,e)},re=function(a,b,c,d){b=a.ga.J[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ab&&g.capture==c){var l=g.listener,n=g.wc||g.src;g.pc&&ec(a.ga,g);e=!1!==l.call(n,d)&&e}}return e&&0!=d.Ne};G.prototype.rd=function(a,b,c,d){return this.ga.rd(String(a),b,c,d)};G.prototype.hasListener=function(a,b){return this.ga.hasListener(ba(a)?String(a):void 0,b)};var qe=function(a){w(a.ga,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var se="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""},te=function(){};te.prototype.next=function(){throw se;};te.prototype.ff=function(){return this};var H=function(a,b){a&&a.log(le,b,void 0)};var ue=function(a,b){this.ja={};this.A=[];this.fb=this.s=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};h=ue.prototype;h.ha=function(){ve(this);for(var a=[],b=0;b<this.A.length;b++)a.push(this.ja[this.A[b]]);return a};h.va=function(){ve(this);return this.A.concat()};h.Ib=function(a){return we(this.ja,a)};h.clear=function(){this.ja={};this.fb=this.s=this.A.length=0};
h.remove=function(a){return we(this.ja,a)?(delete this.ja[a],this.s--,this.fb++,this.A.length>2*this.s&&ve(this),!0):!1};var ve=function(a){if(a.s!=a.A.length){for(var b=0,c=0;b<a.A.length;){var d=a.A[b];we(a.ja,d)&&(a.A[c++]=d);b++}a.A.length=c}if(a.s!=a.A.length){var e={};for(c=b=0;b<a.A.length;)d=a.A[b],we(e,d)||(a.A[c++]=d,e[d]=1),b++;a.A.length=c}};h=ue.prototype;h.get=function(a,b){return we(this.ja,a)?this.ja[a]:b};
h.set=function(a,b){we(this.ja,a)||(this.s++,this.A.push(a),this.fb++);this.ja[a]=b};h.addAll=function(a){if(a instanceof ue){var b=a.va();a=a.ha()}else b=ib(a),a=hb(a);for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.va(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new ue(this)};
h.ff=function(a){ve(this);var b=0,c=this.fb,d=this,e=new te;e.next=function(){if(c!=d.fb)throw Error("The map has changed since the iterator was created");if(b>=d.A.length)throw se;var e=d.A[b++];return a?e:d.ja[e]};return e};var we=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var xe=function(a){if(a.ha&&"function"==typeof a.ha)return a.ha();if(m(a))return a.split("");if(ja(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return hb(a)},ye=function(a){if(a.va&&"function"==typeof a.va)return a.va();if(!a.ha||"function"!=typeof a.ha){if(ja(a)||m(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return ib(a)}},ze=function(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ja(a)||m(a))x(a,b,c);else for(var d=ye(a),e=xe(a),f=e.length,
g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)};var Ae=function(a,b,c){if(p(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)},Be=function(a){var b=null;return(new C(function(c,d){b=Ae(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).f(function(a){k.clearTimeout(b);throw a;})};var Ce=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,De=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var I=function(a){G.call(this);this.headers=new ue;this.dd=a||null;this.Ba=!1;this.cd=this.b=null;this.Tb=this.Ee=this.Fc="";this.Pa=this.wd=this.Ac=this.nd=!1;this.Cb=0;this.Vc=null;this.Pc="";this.Zc=this.dg=this.af=!1};t(I,G);var Ee=I.prototype,Fe=pe("goog.net.XhrIo");Ee.P=Fe;var Ge=/^https?$/i,He=["POST","PUT"];
I.prototype.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Fc+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Fc=a;this.Tb="";this.Ee=b;this.nd=!1;this.Ba=!0;this.b=this.dd?this.dd.rc():Mc.rc();this.cd=this.dd?Lc(this.dd):Lc(Mc);this.b.onreadystatechange=r(this.Ke,this);this.dg&&"onprogress"in this.b&&(this.b.onprogress=r(function(a){this.Je(a,!0)},this),this.b.upload&&(this.b.upload.onprogress=r(this.Je,this)));try{H(this.P,Ie(this,"Opening Xhr")),
this.wd=!0,this.b.open(b,String(a),!0),this.wd=!1}catch(f){H(this.P,Ie(this,"Error opening Xhr: "+f.message));this.ba(5,f);return}a=c||"";var e=this.headers.clone();d&&ze(d,function(a,b){e.set(b,a)});d=Va(e.va());c=k.FormData&&a instanceof k.FormData;!Wa(He,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);this.Pc&&(this.b.responseType=this.Pc);"withCredentials"in this.b&&this.b.withCredentials!==this.af&&
(this.b.withCredentials=this.af);try{Je(this),0<this.Cb&&(this.Zc=Ke(this.b),H(this.P,Ie(this,"Will abort after "+this.Cb+"ms if incomplete, xhr2 "+this.Zc)),this.Zc?(this.b.timeout=this.Cb,this.b.ontimeout=r(this.ic,this)):this.Vc=Ae(this.ic,this.Cb,this)),H(this.P,Ie(this,"Sending request")),this.Ac=!0,this.b.send(a),this.Ac=!1}catch(f){H(this.P,Ie(this,"Send error: "+f.message)),this.ba(5,f)}};
var Ke=function(a){return z&&A(9)&&da(a.timeout)&&ba(a.ontimeout)},Ua=function(a){return"content-type"==a.toLowerCase()};I.prototype.ic=function(){"undefined"!=typeof aa&&this.b&&(this.Tb="Timed out after "+this.Cb+"ms, aborting",H(this.P,Ie(this,this.Tb)),this.dispatchEvent("timeout"),this.abort(8))};I.prototype.ba=function(a,b){this.Ba=!1;this.b&&(this.Pa=!0,this.b.abort(),this.Pa=!1);this.Tb=b;Le(this);Me(this)};var Le=function(a){a.nd||(a.nd=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
I.prototype.abort=function(){this.b&&this.Ba&&(H(this.P,Ie(this,"Aborting")),this.Ba=!1,this.Pa=!0,this.b.abort(),this.Pa=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Me(this))};I.prototype.kb=function(){this.b&&(this.Ba&&(this.Ba=!1,this.Pa=!0,this.b.abort(),this.Pa=!1),Me(this,!0));I.Uc.kb.call(this)};I.prototype.Ke=function(){this.isDisposed()||(this.wd||this.Ac||this.Pa?Ne(this):this.$f())};I.prototype.$f=function(){Ne(this)};
var Ne=function(a){if(a.Ba&&"undefined"!=typeof aa)if(a.cd[1]&&4==Oe(a)&&2==Pe(a))H(a.P,Ie(a,"Local request error detected and ignored"));else if(a.Ac&&4==Oe(a))Ae(a.Ke,0,a);else if(a.dispatchEvent("readystatechange"),4==Oe(a)){H(a.P,Ie(a,"Request complete"));a.Ba=!1;try{var b=Pe(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Fc).match(Ce)[1]||null;if(!f&&k.self&&k.self.location){var g=
k.self.location.protocol;f=g.substr(0,g.length-1)}e=!Ge.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var l=2<Oe(a)?a.b.statusText:""}catch(n){H(a.P,"Can not get status: "+n.message),l=""}a.Tb=l+" ["+Pe(a)+"]";Le(a)}}finally{Me(a)}}};I.prototype.Je=function(a,b){w("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Qe(a,"progress"));this.dispatchEvent(Qe(a,b?"downloadprogress":"uploadprogress"))};
var Qe=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Me=function(a,b){if(a.b){Je(a);var c=a.b,d=a.cd[0]?ea:null;a.b=null;a.cd=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.P)&&a.log(ie,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Je=function(a){a.b&&a.Zc&&(a.b.ontimeout=null);da(a.Vc)&&(k.clearTimeout(a.Vc),a.Vc=null)},Oe=function(a){return a.b?a.b.readyState:0},Pe=function(a){try{return 2<Oe(a)?
a.b.status:-1}catch(b){return-1}},Re=function(a){try{return a.b?a.b.responseText:""}catch(b){return H(a.P,"Can not get responseText: "+b.message),""}};
I.prototype.getResponse=function(){try{if(!this.b)return null;if("response"in this.b)return this.b.response;switch(this.Pc){case "":case "text":return this.b.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.b)return this.b.mozResponseArrayBuffer}var a=this.P;a&&a.log(ie,"Response type "+this.Pc+" is not supported on this browser",void 0);return null}catch(b){return H(this.P,"Can not get response: "+b.message),null}};
I.prototype.getResponseHeader=function(a){if(this.b&&4==Oe(this))return a=this.b.getResponseHeader(a),null===a?void 0:a};I.prototype.getAllResponseHeaders=function(){return this.b&&4==Oe(this)?this.b.getAllResponseHeaders():""};var Ie=function(a,b){return b+" ["+a.Ee+" "+a.Fc+" "+Pe(a)+"]"};var Se=function(a,b){this.pa=this.cb=this.qa="";this.tb=null;this.Oa=this.Fa="";this.da=this.Sf=!1;if(a instanceof Se){this.da=ba(b)?b:a.da;Te(this,a.qa);var c=a.cb;J(this);this.cb=c;Ue(this,a.pa);Ve(this,a.tb);We(this,a.Fa);Xe(this,a.ea.clone());a=a.Oa;J(this);this.Oa=a}else a&&(c=String(a).match(Ce))?(this.da=!!b,Te(this,c[1]||"",!0),a=c[2]||"",J(this),this.cb=Ye(a),Ue(this,c[3]||"",!0),Ve(this,c[4]),We(this,c[5]||"",!0),Xe(this,c[6]||"",!0),a=c[7]||"",J(this),this.Oa=Ye(a)):(this.da=!!b,this.ea=
new Ze(null,0,this.da))};Se.prototype.toString=function(){var a=[],b=this.qa;b&&a.push($e(b,af,!0),":");var c=this.pa;if(c||"file"==b)a.push("//"),(b=this.cb)&&a.push($e(b,af,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.tb,null!=c&&a.push(":",String(c));if(c=this.Fa)this.pa&&"/"!=c.charAt(0)&&a.push("/"),a.push($e(c,"/"==c.charAt(0)?bf:cf,!0));(c=this.ea.toString())&&a.push("?",c);(c=this.Oa)&&a.push("#",$e(c,df));return a.join("")};
Se.prototype.resolve=function(a){var b=this.clone(),c=!!a.qa;c?Te(b,a.qa):c=!!a.cb;if(c){var d=a.cb;J(b);b.cb=d}else c=!!a.pa;c?Ue(b,a.pa):c=null!=a.tb;d=a.Fa;if(c)Ve(b,a.tb);else if(c=!!a.Fa){if("/"!=d.charAt(0))if(this.pa&&!this.Fa)d="/"+d;else{var e=b.Fa.lastIndexOf("/");-1!=e&&(d=b.Fa.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(v(e,"./")||v(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var l=e[g++];"."==l?d&&g==e.length&&f.push(""):".."==l?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?We(b,d):c=""!==a.ea.toString();c?Xe(b,a.ea.clone()):c=!!a.Oa;c&&(a=a.Oa,J(b),b.Oa=a);return b};Se.prototype.clone=function(){return new Se(this)};
var Te=function(a,b,c){J(a);a.qa=c?Ye(b,!0):b;a.qa&&(a.qa=a.qa.replace(/:$/,""))},Ue=function(a,b,c){J(a);a.pa=c?Ye(b,!0):b},Ve=function(a,b){J(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.tb=b}else a.tb=null},We=function(a,b,c){J(a);a.Fa=c?Ye(b,!0):b},Xe=function(a,b,c){J(a);b instanceof Ze?(a.ea=b,a.ea.Wd(a.da)):(c||(b=$e(b,ef)),a.ea=new Ze(b,0,a.da))},K=function(a,b,c){J(a);a.ea.set(b,c)},ff=function(a,b){return a.ea.get(b)};
Se.prototype.removeParameter=function(a){J(this);this.ea.remove(a);return this};var J=function(a){if(a.Sf)throw Error("Tried to modify a read-only Uri");};Se.prototype.Wd=function(a){this.da=a;this.ea&&this.ea.Wd(a);return this};
var gf=function(a){return a instanceof Se?a.clone():new Se(a,void 0)},hf=function(a,b){var c=new Se(null,void 0);Te(c,"https");a&&Ue(c,a);b&&We(c,b);return c},Ye=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},$e=function(a,b,c){return m(a)?(a=encodeURI(a).replace(b,jf),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},jf=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},af=/[#\/\?@]/g,cf=/[\#\?:]/g,bf=/[\#\?]/g,ef=/[\#\?@]/g,
df=/#/g,Ze=function(a,b,c){this.s=this.m=null;this.U=a||null;this.da=!!c},kf=function(a){a.m||(a.m=new ue,a.s=0,a.U&&De(a.U,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},mf=function(a){var b=ye(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Ze(null,0,void 0);a=xe(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ia(f)?lf(c,e,f):c.add(e,f)}return c};h=Ze.prototype;
h.add=function(a,b){kf(this);this.U=null;a=this.ca(a);var c=this.m.get(a);c||this.m.set(a,c=[]);c.push(b);this.s=Ca(this.s)+1;return this};h.remove=function(a){kf(this);a=this.ca(a);return this.m.Ib(a)?(this.U=null,this.s=Ca(this.s)-this.m.get(a).length,this.m.remove(a)):!1};h.clear=function(){this.m=this.U=null;this.s=0};h.Ib=function(a){kf(this);a=this.ca(a);return this.m.Ib(a)};h.forEach=function(a,b){kf(this);this.m.forEach(function(c,d){x(c,function(c){a.call(b,c,d,this)},this)},this)};
h.va=function(){kf(this);for(var a=this.m.ha(),b=this.m.va(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};h.ha=function(a){kf(this);var b=[];if(m(a))this.Ib(a)&&(b=$a(b,this.m.get(this.ca(a))));else{a=this.m.ha();for(var c=0;c<a.length;c++)b=$a(b,a[c])}return b};h.set=function(a,b){kf(this);this.U=null;a=this.ca(a);this.Ib(a)&&(this.s=Ca(this.s)-this.m.get(a).length);this.m.set(a,[b]);this.s=Ca(this.s)+1;return this};
h.get=function(a,b){a=a?this.ha(a):[];return 0<a.length?String(a[0]):b};var lf=function(a,b,c){a.remove(b);0<c.length&&(a.U=null,a.m.set(a.ca(b),ab(c)),a.s=Ca(a.s)+c.length)};h=Ze.prototype;h.toString=function(){if(this.U)return this.U;if(!this.m)return"";for(var a=[],b=this.m.va(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.ha(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.U=a.join("&")};
h.clone=function(){var a=new Ze;a.U=this.U;this.m&&(a.m=this.m.clone(),a.s=this.s);return a};h.ca=function(a){a=String(a);this.da&&(a=a.toLowerCase());return a};h.Wd=function(a){a&&!this.da&&(kf(this),this.U=null,this.m.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),lf(this,b,a))},this));this.da=a};h.extend=function(a){for(var b=0;b<arguments.length;b++)ze(arguments[b],function(a,b){this.add(b,a)},this)};var nf={Gg:{pd:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",Sd:"https://securetoken.googleapis.com/v1/token",id:"p"},Hg:{pd:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Sd:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},Ig:{pd:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",Sd:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}},of=function(a){for(var b in nf)if(nf[b].id===a)return a=
nf[b],{firebaseEndpoint:a.pd,secureTokenEndpoint:a.Sd};return null},pf;pf=of("__EID__")?"__EID__":void 0;var qf=function(){var a=L();return z&&!!Db&&11==Db||/Edge\/\d+/.test(a)},rf=function(){return k.window&&k.window.location.href||""},sf=function(a,b){b=b||k.window;var c="about:blank";a&&(c=Ac(Dc(a)));b.location.href=c},tf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ia(a[d])?kb(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<tf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},vf=function(){var a=
L();a="Chrome"!=uf(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!z||!Db||9<Db},wf=function(a){a=(a||L()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1},xf=function(a){a=a||k.window;try{a.close()}catch(b){}},yf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-
b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=L().toLowerCase();d&&(b.target=d,v(c,"crios/")&&(b.target="_blank"));"Firefox"==uf(L())&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(d=b)||(d={});a=window;b=c instanceof zc?c:Dc("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;default:e.push(g+
"="+(d[g]?1:0))}var g=e.join(",");(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),e=fd(g),"undefined"!=typeof e.HTMLAnchorElement&&"undefined"!=typeof e.Location&&"undefined"!=typeof e.Element&&w(g&&(g instanceof e.HTMLAnchorElement||!(g instanceof e.Location||g instanceof e.Element)),"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",ed(g)),b instanceof zc||b instanceof zc||(b=b.ob?
b.mb():String(b),w(Bc.test(b))||(b="about:invalid#zClosurez"),b=Cc(b)),g.href=Ac(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=Ac(b),g&&(tb&&v(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=Ia("b/12014412, meta tag with sanitized URL"),d='<META HTTP-EQUIV="refresh" content="0; url='+xa(d)+'">',Da(Ha(a),"must provide justification"),
w(!/^[\s\xa0]*$/.test(Ha(a)),"must provide non-empty justification"),g.document.write(jd((new id).Of(d))),g.document.close())):g=a.open(Ac(b),c,g);if(g)try{g.focus()}catch(l){}return g},zf=function(a){return new C(function(b){var c=function(){Be(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},Af=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bf=function(){var a=null;return(new C(function(b){"complete"==k.document.readyState?b():(a=function(){b()},jc(window,"load",a))})).f(function(b){sc(window,
"load",a);throw b;})},Df=function(){return Cf(void 0)?Bf().then(function(){return new C(function(a,b){var c=k.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):E(Error("Cordova must run in an Android or iOS file scheme."))},Cf=function(a){a=a||L();return!("file:"!==Ef()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))},Ff=function(){var a=k.window;try{return!(!a||a==a.top)}catch(b){return!1}},
Gf=function(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase.INTERNAL.hasOwnProperty("node")?"Node":"Browser"},Hf=function(){var a=Gf();return"ReactNative"===a||"Node"===a},uf=function(a){var b=a.toLowerCase();if(v(b,"opera/")||v(b,"opr/")||v(b,"opios/"))return"Opera";if(v(b,"iemobile"))return"IEMobile";if(v(b,"msie")||v(b,"trident/"))return"IE";if(v(b,"edge/"))return"Edge";if(v(b,"firefox/"))return"Firefox";if(v(b,"silk/"))return"Silk";if(v(b,"blackberry"))return"Blackberry";
if(v(b,"webos"))return"Webos";if(!v(b,"safari/")||v(b,"chrome/")||v(b,"crios/")||v(b,"android"))if(!v(b,"chrome/")&&!v(b,"crios/")||v(b,"edge/")){if(v(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},If=function(a){var b=Gf();return("Browser"===b?uf(L()):b)+"/JsCore/"+a},L=function(){return k.navigator&&k.navigator.userAgent||""},M=function(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length&&
"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},Kf=function(){try{var a=k.localStorage,b=Jf();if(a)return a.setItem(b,"1"),a.removeItem(b),qf()?!!k.indexedDB:!0}catch(c){}return!1},Mf=function(){return(Lf()||"chrome-extension:"===Ef()||Cf())&&!Hf()&&Kf()},Lf=function(){return"http:"===Ef()||"https:"===Ef()},Ef=function(){return k.location&&k.location.protocol||null},Nf=function(a){a=a||L();return wf(a)||"Firefox"==uf(a)?!1:!0},Of=function(a){return"undefined"===typeof a?
null:Gc(a)},Pf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b},Qf=function(a){if(null!==a)return JSON.parse(a)},Jf=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},Rf=function(a){a=a||L();return"Safari"==uf(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0},Sf=function(){var a=k.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=
null},Tf=function(){var a=k.navigator;return a&&"boolean"===typeof a.onLine&&(Lf()||"chrome-extension:"===Ef()||"undefined"!==typeof a.connection)?a.onLine:!0},Uf=function(a,b,c,d){if(a>b)throw Error("Short delay should be less than long delay!");this.rg=a;this.Wf=b;a=c||L();d=d||Gf();this.Rf=wf(a)||"ReactNative"===d};Uf.prototype.get=function(){return this.Rf?this.Wf:this.rg};
var Vf=function(){var a=k.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0},Wf=function(){var a=k.document,b=null;return Vf()||!a?D():(new C(function(c){b=function(){Vf()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).f(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})};var Xf={};var Yf;try{var Zf={};Object.defineProperty(Zf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Zf,"abcd",{configurable:!0,enumerable:!0,value:2});Yf=2==Zf.abcd}catch(a){Yf=!1}
var N=function(a,b,c){Yf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},$f=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&N(a,c,b[c])},ag=function(a){var b={};$f(b,a);return b},bg=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},cg=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0},dg=function(a){var b=a;if("object"==typeof a&&null!=a){b=
"length"in a?[]:{};for(var c in a)N(b,c,dg(a[c]))}return b};var eg="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),fg=["client_id","response_type","scope","redirect_uri","state"],gg={Dg:{Ec:"locale",Yb:500,Xb:600,providerId:"facebook.com",Qd:fg},Eg:{Ec:null,Yb:500,Xb:620,providerId:"github.com",Qd:fg},Fg:{Ec:"hl",Yb:515,Xb:680,providerId:"google.com",Qd:fg},Jg:{Ec:"lang",Yb:485,Xb:705,providerId:"twitter.com",Qd:eg}},hg=function(a){for(var b in gg)if(gg[b].providerId==a)return gg[b];
return null};var O=function(a,b){this.code="auth/"+a;this.message=b||ig[a]||""};t(O,Error);O.prototype.I=function(){return{code:this.code,message:this.message}};O.prototype.toJSON=function(){return this.I()};
var jg=function(a){var b=a&&a.code;return b?new O(b.substring(5),a.message):null},ig={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
"code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
"invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.",
"invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.",
"invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.",
"invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
"missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.",
"missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.",
"no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.",
"popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The SMS quota for this project has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.",
"too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.",
"user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var kg=function(a,b,c,d,e){this.ma=a;this.W=b||null;this.Db=c||null;this.Ud=d||null;this.ba=e||null;if(this.Db||this.ba){if(this.Db&&this.ba)throw new O("invalid-auth-event");if(this.Db&&!this.Ud)throw new O("invalid-auth-event");}else throw new O("invalid-auth-event");};kg.prototype.uc=function(){return this.Ud};kg.prototype.getError=function(){return this.ba};kg.prototype.I=function(){return{type:this.ma,eventId:this.W,urlResponse:this.Db,sessionId:this.Ud,error:this.ba&&this.ba.I()}};
var lg=function(a){a=a||{};return a.type?new kg(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&jg(a.error)):null};var mg=function(a){var b="unauthorized-domain",c=void 0,d=gf(a);a=d.pa;d=d.qa;"chrome-extension"==d?c=oa("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=oa("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b=
"operation-not-supported-in-this-environment";O.call(this,b,c)};t(mg,O);var ng=function(a){this.Vf=a.sub;na();this.Lb=a.email||null;this.eg=a.provider_id||null;this.jf=!!a.is_anonymous||"anonymous"==this.eg};ng.prototype.getEmail=function(){return this.Lb};ng.prototype.isAnonymous=function(){return this.jf};var og=function(a,b){return a.then(function(a){if(a.idToken){a:{var c=a.idToken.split(".");if(3==c.length){c=c[1];for(var e=(4-c.length%4)%4,f=0;f<e;f++)c+=".";try{var g=JSON.parse(Ib(c));if(g.sub&&g.iss&&g.aud&&g.exp){var l=new ng(g);break a}}catch(n){}}l=null}if(!l||b!=l.Vf)throw new O("user-mismatch");return a}throw new O("user-mismatch");}).f(function(a){throw a&&a.code&&"auth/user-not-found"==a.code?new O("user-mismatch"):a;})},pg=function(a,b){if(b.idToken||b.accessToken)b.idToken&&N(this,"idToken",
b.idToken),b.accessToken&&N(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)N(this,"accessToken",b.oauthToken),N(this,"secret",b.oauthTokenSecret);else throw new O("internal-error","failed to construct a credential");N(this,"providerId",a)};pg.prototype.Nb=function(a){return qg(a,rg(this))};pg.prototype.Gc=function(a,b){var c=rg(this);c.idToken=b;return sg(a,c)};pg.prototype.Dd=function(a,b){var c=rg(this);return og(tg(a,c),b)};
var rg=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:mf(b).toString(),requestUri:"http://localhost"}};pg.prototype.I=function(){var a={providerId:this.providerId};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
var ug=function(a,b){this.hg=b||[];$f(this,{providerId:a,isOAuthProvider:!0});this.me={};this.Bd=(hg(a)||{}).Ec||null;this.md=null};ug.prototype.setCustomParameters=function(a){this.me=lb(a);return this};var P=function(a){ug.call(this,a,fg);this.Rd=[]};t(P,ug);P.prototype.addScope=function(a){Wa(this.Rd,a)||this.Rd.push(a);return this};P.prototype.te=function(){return ab(this.Rd)};
P.prototype.credential=function(a,b){if(!a&&!b)throw new O("argument-error","credential failed: must provide the ID token and/or the access token.");return new pg(this.providerId,{idToken:a||null,accessToken:b||null})};var vg=function(){P.call(this,"facebook.com")};t(vg,P);N(vg,"PROVIDER_ID","facebook.com");
var wg=function(a){if(!a)throw new O("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new vg).credential(null,b)},xg=function(){P.call(this,"github.com")};t(xg,P);N(xg,"PROVIDER_ID","github.com");var yg=function(a){if(!a)throw new O("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new xg).credential(null,b)},zg=function(){P.call(this,"google.com");this.addScope("profile")};
t(zg,P);N(zg,"PROVIDER_ID","google.com");var Ag=function(a,b){var c=a;q(a)&&(c=a.idToken,b=a.accessToken);return(new zg).credential(c,b)},Bg=function(){ug.call(this,"twitter.com",eg)};t(Bg,ug);N(Bg,"PROVIDER_ID","twitter.com");
var Cg=function(a,b){var c=a;q(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new O("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new pg("twitter.com",c)},Dg=function(a,b){this.Lb=a;this.Id=b;N(this,"providerId","password")};Dg.prototype.Nb=function(a){return Q(a,Eg,{email:this.Lb,password:this.Id})};Dg.prototype.Gc=function(a,b){return Q(a,Fg,{idToken:b,email:this.Lb,password:this.Id})};
Dg.prototype.Dd=function(a,b){return og(this.Nb(a),b)};Dg.prototype.I=function(){return{email:this.Lb,password:this.Id}};var Gg=function(){$f(this,{providerId:"password",isOAuthProvider:!1})};$f(Gg,{PROVIDER_ID:"password"});var Hg=function(a){if(!(a.verificationId&&a.$c||a.hc&&a.phoneNumber))throw new O("internal-error");this.R=a;N(this,"providerId","phone")};Hg.prototype.Nb=function(a){return a.verifyPhoneNumber(Ig(this))};Hg.prototype.Gc=function(a,b){var c=Ig(this);c.idToken=b;return Q(a,Jg,c)};
Hg.prototype.Dd=function(a,b){var c=Ig(this);c.operation="REAUTH";a=Q(a,Kg,c);return og(a,b)};Hg.prototype.I=function(){var a={providerId:"phone"};this.R.verificationId&&(a.verificationId=this.R.verificationId);this.R.$c&&(a.verificationCode=this.R.$c);this.R.hc&&(a.temporaryProof=this.R.hc);this.R.phoneNumber&&(a.phoneNumber=this.R.phoneNumber);return a};
var Ig=function(a){return a.R.hc&&a.R.phoneNumber?{temporaryProof:a.R.hc,phoneNumber:a.R.phoneNumber}:{sessionInfo:a.R.verificationId,code:a.R.$c}},Lg=function(a){try{this.mf=a||firebase.auth()}catch(b){throw new O("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}$f(this,{providerId:"phone",isOAuthProvider:!1})};
Lg.prototype.verifyPhoneNumber=function(a,b){var c=this.mf.g;return D(b.verify()).then(function(d){if(!m(d))throw new O("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return Q(c,Mg,{phoneNumber:a,recaptchaToken:d});default:throw new O("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};
var Ng=function(a,b){if(!a)throw new O("missing-verification-id");if(!b)throw new O("missing-verification-code");return new Hg({verificationId:a,$c:b})};$f(Lg,{PROVIDER_ID:"phone"});
var Og=function(a){if(a.temporaryProof&&a.phoneNumber)return new Hg({hc:a.temporaryProof,phoneNumber:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return Ag(a,c);case "facebook.com":return wg(c);case "github.com":return yg(c);case "twitter.com":return Cg(c,d);default:return(new P(b)).credential(a,c)}}catch(e){return null}},Pg=function(a){if(!a.isOAuthProvider)throw new O("invalid-oauth-provider");
};var Qg=function(a,b,c){O.call(this,a,c);a=b||{};a.email&&N(this,"email",a.email);a.phoneNumber&&N(this,"phoneNumber",a.phoneNumber);a.credential&&N(this,"credential",a.credential)};t(Qg,O);Qg.prototype.I=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.I();b&&nb(a,b);return a};Qg.prototype.toJSON=function(){return this.I()};
var Rg=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));var c={credential:Og(a)};if(a.email)c.email=a.email;else if(a.phoneNumber)c.phoneNumber=a.phoneNumber;else return new O(b,a.message||void 0);return new Qg(b,c,a.message)}return null};var Sg=function(a){this.Cg=a};t(Sg,Kc);Sg.prototype.rc=function(){return new this.Cg};Sg.prototype.zd=function(){return{}};
var R=function(a,b,c){var d="Node"==Gf();d=k.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new O("internal-error","The XMLHttpRequest compatibility library was not found.");this.o=a;a=b||{};this.ng=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.og=a.secureTokenTimeout||Tg;this.Pe=lb(a.secureTokenHeaders||Ug);this.xf=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.yf=a.firebaseTimeout||
Vg;this.sc=lb(a.firebaseHeaders||Wg);c&&(this.sc["X-Client-Version"]=c,this.Pe["X-Client-Version"]=c);this.pf=new Pc;this.Bg=new Sg(d)},Xg,Tg=new Uf(3E4,6E4),Ug={"Content-Type":"application/x-www-form-urlencoded"},Vg=new Uf(3E4,6E4),Wg={"Content-Type":"application/json"},Yg=function(a,b){b?a.sc["X-Firebase-Locale"]=b:delete a.sc["X-Firebase-Locale"]},$g=function(a,b,c,d,e,f,g){Tf()?(vf()?a=r(a.qg,a):(Xg||(Xg=new C(function(a,b){Zg(a,b)})),a=r(a.pg,a)),a(b,c,d,e,f,g)):c&&c(null)};
R.prototype.qg=function(a,b,c,d,e,f){var g="Node"==Gf(),l=Hf()?g?new I(this.Bg):new I:new I(this.pf);if(f){l.Cb=Math.max(0,f);var n=setTimeout(function(){l.dispatchEvent("timeout")},f)}l.listen("complete",function(){n&&clearTimeout(n);var a=null;try{a=JSON.parse(Re(this))||null}catch(wb){a=null}b&&b(a)});rc(l,"ready",function(){n&&clearTimeout(n);this.La||(this.La=!0,this.kb())});rc(l,"timeout",function(){n&&clearTimeout(n);this.La||(this.La=!0,this.kb());b&&b(null)});l.send(a,c,d,e)};
var ah=Ia("https://apis.google.com/js/client.js?onload=%{onload}"),bh="__fcb"+Math.floor(1E6*Math.random()).toString(),Zg=function(a,b){if(((window.gapi||{}).client||{}).request)a();else{k[bh]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=Na(ah,{onload:bh});Wd(de(c),function(){b(Error("CORS_UNSUPPORTED"))})}};
R.prototype.pg=function(a,b,c,d,e){var f=this;Xg.then(function(){window.gapi.client.setApiKey(f.o);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).f(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
var dh=function(a,b){return new C(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?$g(a,a.ng+"?key="+encodeURIComponent(a.o),function(a){a?a.error?d(ch(a)):a.access_token&&a.refresh_token?c(a):d(new O("internal-error")):d(new O("network-request-failed"))},"POST",mf(b).toString(),a.Pe,a.og.get()):d(new O("internal-error"))})},eh=function(a,b,c,d,e,f){var g=gf(a.xf+b);K(g,"key",a.o);f&&K(g,"cb",na().toString());var l="GET"==c;if(l)for(var n in d)d.hasOwnProperty(n)&&
K(g,n,d[n]);return new C(function(b,f){$g(a,g.toString(),function(a){a?a.error?f(ch(a,e||{})):b(a):f(new O("network-request-failed"))},c,l?void 0:Gc(Pf(d)),a.sc,a.yf.get())})},fh=function(a){if(!xc.test(a.email))throw new O("invalid-email");},gh=function(a){"email"in a&&fh(a)},ih=function(a,b){return Q(a,hh,{identifier:b,continueUri:Lf()?rf():"http://localhost"}).then(function(a){return a.allProviders||[]})},kh=function(a){return Q(a,jh,{}).then(function(a){return a.authorizedDomains||[]})},lh=function(a){if(!a.idToken)throw new O("internal-error");
},mh=function(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new O("internal-error");}else{if(!a.sessionInfo)throw new O("missing-verification-id");if(!a.code)throw new O("missing-verification-code");}};R.prototype.signInAnonymously=function(){return Q(this,nh,{})};R.prototype.updateEmail=function(a,b){return Q(this,oh,{idToken:a,email:b})};R.prototype.updatePassword=function(a,b){return Q(this,Fg,{idToken:a,password:b})};var ph={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
R.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];fb(ph,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return Q(this,oh,c)};R.prototype.sendPasswordResetEmail=function(a,b){a={requestType:"PASSWORD_RESET",email:a};nb(a,b);return Q(this,qh,a)};R.prototype.sendEmailVerification=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};nb(a,b);return Q(this,rh,a)};R.prototype.verifyPhoneNumber=function(a){return Q(this,sh,a)};
var uh=function(a,b,c){return Q(a,th,{idToken:b,deleteProvider:c})},vh=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new O("internal-error");},wh=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=Rg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=Rg(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=Rg(a));if(b)throw b;if(!a.idToken)throw new O("internal-error");},qg=function(a,
b){b.returnIdpCredential=!0;return Q(a,xh,b)},sg=function(a,b){b.returnIdpCredential=!0;return Q(a,yh,b)},tg=function(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return Q(a,zh,b)},Ah=function(a){if(!a.oobCode)throw new O("invalid-action-code");};R.prototype.confirmPasswordReset=function(a,b){return Q(this,Bh,{oobCode:a,newPassword:b})};R.prototype.checkActionCode=function(a){return Q(this,Ch,{oobCode:a})};R.prototype.applyActionCode=function(a){return Q(this,Dh,{oobCode:a})};
var Dh={endpoint:"setAccountInfo",F:Ah,ab:"email"},Ch={endpoint:"resetPassword",F:Ah,$:function(a){if(!a.email||!a.requestType)throw new O("internal-error");}},Eh={endpoint:"signupNewUser",F:function(a){fh(a);if(!a.password)throw new O("weak-password");},$:lh,Aa:!0},hh={endpoint:"createAuthUri"},Fh={endpoint:"deleteAccount",Za:["idToken"]},th={endpoint:"setAccountInfo",Za:["idToken","deleteProvider"],F:function(a){if(!ia(a.deleteProvider))throw new O("internal-error");}},Gh={endpoint:"getAccountInfo"},
rh={endpoint:"getOobConfirmationCode",Za:["idToken","requestType"],F:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new O("internal-error");},ab:"email"},qh={endpoint:"getOobConfirmationCode",Za:["requestType"],F:function(a){if("PASSWORD_RESET"!=a.requestType)throw new O("internal-error");fh(a)},ab:"email"},jh={ee:!0,endpoint:"getProjectConfig",ye:"GET"},Hh={ee:!0,endpoint:"getRecaptchaParam",ye:"GET",$:function(a){if(!a.recaptchaSiteKey)throw new O("internal-error");}},Bh={endpoint:"resetPassword",
F:Ah,ab:"email"},Mg={endpoint:"sendVerificationCode",Za:["phoneNumber","recaptchaToken"],ab:"sessionInfo"},oh={endpoint:"setAccountInfo",Za:["idToken"],F:gh,Aa:!0},Fg={endpoint:"setAccountInfo",Za:["idToken"],F:function(a){gh(a);if(!a.password)throw new O("weak-password");},$:lh,Aa:!0},nh={endpoint:"signupNewUser",$:lh,Aa:!0},xh={endpoint:"verifyAssertion",F:vh,$:wh,Aa:!0},zh={endpoint:"verifyAssertion",F:vh,$:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new O("user-not-found");
if(!a.idToken)throw new O("internal-error");},Aa:!0},yh={endpoint:"verifyAssertion",F:function(a){vh(a);if(!a.idToken)throw new O("internal-error");},$:wh,Aa:!0},Ih={endpoint:"verifyCustomToken",F:function(a){if(!a.token)throw new O("invalid-custom-token");},$:lh,Aa:!0},Eg={endpoint:"verifyPassword",F:function(a){fh(a);if(!a.password)throw new O("wrong-password");},$:lh,Aa:!0},sh={endpoint:"verifyPhoneNumber",F:mh,$:lh},Jg={endpoint:"verifyPhoneNumber",F:function(a){if(!a.idToken)throw new O("internal-error");
mh(a)},$:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",Rg(a);lh(a)}},Kg={sf:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",F:mh,$:lh},Q=function(a,b,c){if(!cg(c,b.Za))return E(new O("internal-error"));var d=b.ye||"POST",e;return D(c).then(b.F).then(function(){b.Aa&&(c.returnSecureToken=!0);return eh(a,b.endpoint,d,c,b.sf,b.ee||!1)}).then(function(a){return e=a}).then(b.$).then(function(){if(!b.ab)return e;if(!(b.ab in e))throw new O("internal-error");return e[b.ab]})},
ch=function(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new O(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",
INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",
INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",
UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"};nb(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new O(d[e],b);!b&&a&&(b=Of(a));return new O("internal-error",b)};var Jh=function(a){this.D=a};Jh.prototype.value=function(){return this.D};Jh.prototype.Re=function(a){this.D.style=a;return this};Jh.prototype.getStyle=function(){return this.D.style};var Kh=function(a){this.D=a||{}};h=Kh.prototype;h.value=function(){return this.D};h.getUrl=function(){return this.D.url};h.Re=function(a){this.D.style=a;return this};h.getStyle=function(){return this.D.style};h.getId=function(){return this.D.id};h.getContext=function(){return this.D.context};var Mh=function(a){this.yg=a;this.zc=null;this.Fd=Lh(this)},Nh=function(a){var b=new Kh;b.D.where=document.body;b.D.url=a.yg;b.D.messageHandlersFilter=M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.D.attributes=b.D.attributes||{};(new Jh(b.D.attributes)).Re({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.D.dontclear=!0;return b},Lh=function(a){return Oh().then(function(){return new C(function(b,c){M("gapi.iframes.getContext")().open(Nh(a).value(),function(d){a.zc=d;a.zc.restyle({setHideOnLeave:!1});
var e=setTimeout(function(){c(Error("Network Error"))},Ph.get()),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})};Mh.prototype.sendMessage=function(a){var b=this;return this.Fd.then(function(){return new C(function(c){b.zc.send(a.type,a,c,M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})};
var Qh=function(a,b){a.Fd.then(function(){a.zc.register("authEvent",b,M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Rh=Ia("https://apis.google.com/js/api.js?onload=%{onload}"),Sh=new Uf(3E4,6E4),Ph=new Uf(5E3,15E3),Th=null,Oh=function(){return Th?Th:Th=(new C(function(a,b){if(Tf()){var c=function(){Sf();M("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Sf();b(Error("Network Error"))},timeout:Sh.get()})};if(M("gapi.iframes.Iframe"))a();else if(M("gapi.load"))c();else{var d="__iframefcb"+
Math.floor(1E6*Math.random()).toString();k[d]=function(){M("gapi.load")?c():b(Error("Network Error"))};d=Na(Rh,{onload:d});D(de(d)).f(function(){b(Error("Network Error"))})}}else b(Error("Network Error"))})).f(function(a){Th=null;throw a;})};var Uh=function(a,b,c){this.C=a;this.o=b;this.u=c;this.eb=null;this.bb=hf(this.C,"/__/auth/iframe");K(this.bb,"apiKey",this.o);K(this.bb,"appName",this.u);this.V=null};Uh.prototype.Xd=function(a){this.eb=a;return this};Uh.prototype.Vd=function(a){this.V=a;return this};Uh.prototype.toString=function(){this.eb?K(this.bb,"v",this.eb):this.bb.removeParameter("v");this.V?K(this.bb,"eid",this.V):this.bb.removeParameter("eid");return this.bb.toString()};
var Vh=function(a,b,c,d,e){this.C=a;this.o=b;this.u=c;this.lf=d;this.eb=this.W=this.Pd=null;this.vb=e;this.V=null};Vh.prototype.Xd=function(a){this.eb=a;return this};Vh.prototype.Vd=function(a){this.V=a;return this};
Vh.prototype.toString=function(){var a=hf(this.C,"/__/auth/handler");K(a,"apiKey",this.o);K(a,"appName",this.u);K(a,"authType",this.lf);if(this.vb.isOAuthProvider){var b=this.vb;try{var c=firebase.app(this.u).auth().ia}catch(l){c=null}b.md=c;K(a,"providerId",this.vb.providerId);b=this.vb;c=Pf(b.me);for(var d in c)c[d]=c[d].toString();d=b.hg;c=lb(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.Bd&&b.md&&!c[b.Bd]&&(c[b.Bd]=b.md);jb(c)||K(a,"customParameters",Of(c))}"function"===typeof this.vb.te&&
(b=this.vb.te(),b.length&&K(a,"scopes",b.join(",")));this.Pd?K(a,"redirectUrl",this.Pd):a.removeParameter("redirectUrl");this.W?K(a,"eventId",this.W):a.removeParameter("eventId");this.eb?K(a,"v",this.eb):a.removeParameter("v");if(this.mc)for(var g in this.mc)this.mc.hasOwnProperty(g)&&!ff(a,g)&&K(a,g,this.mc[g]);this.V?K(a,"eid",this.V):a.removeParameter("eid");return a.toString()};
var Wh=function(a,b,c,d,e){this.C=a;this.o=b;this.u=c;this.Ka=d||null;this.V=e||null;this.Af=this.Ka?If(this.Ka):null;d=this.Ka;var f=this.V;this.Kf=(new Uh(a,b,c)).Xd(d).Vd(f).toString();this.ta=[];this.g=new R(b,of(e),this.Af);this.Bc=this.wa=null},Xh=function(a){var b=rf();return kh(a).then(function(a){a:{var c=gf(b),e=c.qa;c=c.pa;for(var f=0;f<a.length;f++){var g=a[f];var l=c;var n=e;0==g.indexOf("chrome-extension://")?l=gf(g).pa==l&&"chrome-extension"==n:"http"!=n&&"https"!=n?l=!1:Af.test(g)?
l=l==g:(g=g.split(".").join("\\."),l=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(l));if(l){a=!0;break a}}a=!1}if(!a)throw new mg(rf());})};h=Wh.prototype;h.Rb=function(){if(this.Bc)return this.Bc;var a=this;return this.Bc=Bf().then(function(){a.yc=new Mh(a.Kf);Yh(a)})};h.ec=function(a,b,c){var d=new O("popup-closed-by-user"),e=new O("web-storage-unsupported"),f=this,g=!1;return this.Qa().then(function(){Zh(f).then(function(c){c||(a&&xf(a),b(e),g=!0)})}).f(function(){}).then(function(){if(!g)return zf(a)}).then(function(){if(!g)return Be(c).then(function(){b(d)})})};
h.Se=function(){var a=L();return!Nf(a)&&!Rf(a)};h.we=function(){return!1};
h.Zb=function(a,b,c,d,e,f,g){if(!a)return E(new O("popup-blocked"));if(g&&!Nf())return this.Qa().f(function(b){xf(a);e(b)}),d(),D();this.wa||(this.wa=Xh(this.g));var l=this;return this.wa.then(function(){var b=l.Qa().f(function(b){xf(a);e(b);throw b;});d();return b}).then(function(){Pg(c);if(!g){var d=$h(l.C,l.o,l.u,b,c,null,f,l.Ka,void 0,l.V);sf(d,a)}}).f(function(a){"auth/network-request-failed"==a.code&&(l.wa=null);throw a;})};
h.$b=function(a,b,c){this.wa||(this.wa=Xh(this.g));var d=this;return this.wa.then(function(){Pg(b);var e=$h(d.C,d.o,d.u,a,b,rf(),c,d.Ka,void 0,d.V);sf(e)}).f(function(a){"auth/network-request-failed"==a.code&&(d.wa=null);throw a;})};h.Qa=function(){var a=this;return this.Rb().then(function(){return a.yc.Fd}).f(function(){a.wa=null;throw new O("network-request-failed");})};h.We=function(){return!0};
var $h=function(a,b,c,d,e,f,g,l,n,F){a=new Vh(a,b,c,d,e);a.Pd=f;a.W=g;f=a.Xd(l);f.mc=lb(n||null);return f.Vd(F).toString()},Yh=function(a){if(!a.yc)throw Error("IfcHandler must be initialized!");Qh(a.yc,function(b){var c={};if(b&&b.authEvent){var d=!1;b=lg(b.authEvent);for(c=0;c<a.ta.length;c++)d=a.ta[c](b)||d;c={};c.status=d?"ACK":"ERROR";return D(c)}c.status="ERROR";return D(c)})},Zh=function(a){var b={type:"webStorageSupport"};return a.Rb().then(function(){return a.yc.sendMessage(b)}).then(function(a){if(a&&
a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})};Wh.prototype.hb=function(a){this.ta.push(a)};Wh.prototype.cc=function(a){Za(this.ta,function(b){return b==a})};var ai=function(a,b,c,d,e,f){N(this,"type","recaptcha");this.ad=this.Hb=null;this.Jb=!1;this.ke=b;this.Ea=c||{theme:"light",type:"image"};this.K=[];if(this.Ea.sitekey)throw new O("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.Cc="invisible"===this.Ea.size;if(!ld(b)||!this.Cc&&ld(b).hasChildNodes())throw new O("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.g=new R(a,
f||null,e||null);this.Df=d||function(){return null};var g=this;this.Wc=[];var l=this.Ea.callback;this.Ea.callback=function(a){g.Kb(a);if("function"===typeof l)l(a);else if("string"===typeof l){var b=M(l,k);"function"===typeof b&&b(a)}};var n=this.Ea["expired-callback"];this.Ea["expired-callback"]=function(){g.Kb(null);if("function"===typeof n)n();else if("string"===typeof n){var a=M(n,k);"function"===typeof a&&a()}}};ai.prototype.Kb=function(a){for(var b=0;b<this.Wc.length;b++)try{this.Wc[b](a)}catch(c){}};
var bi=function(a,b){Za(a.Wc,function(a){return a==b})};ai.prototype.c=function(a){var b=this;this.K.push(a);Ed(a,function(){Ya(b.K,a)});return a};
ai.prototype.Sb=function(){var a=this;return this.Hb?this.Hb:this.Hb=this.c(D().then(function(){if(Lf())return Bf();throw new O("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return ci(di(),a.Df())}).then(function(){return Q(a.g,Hh,{})}).then(function(b){a.Ea.sitekey=b.recaptchaSiteKey}).f(function(b){a.Hb=null;throw b;}))};
ai.prototype.render=function(){ei(this);var a=this;return this.c(this.Sb().then(function(){if(null===a.ad){var b=a.ke;if(!a.Cc){var c=ld(b);b=pd("DIV");c.appendChild(b)}a.ad=grecaptcha.render(b,a.Ea)}return a.ad}))};ai.prototype.verify=function(){ei(this);var a=this;return this.c(this.render().then(function(b){return new C(function(c){var d=grecaptcha.getResponse(b);if(d)c(d);else{var e=function(b){b&&(bi(a,e),c(b))};a.Wc.push(e);a.Cc&&grecaptcha.execute(a.ad)}})}))};
var ei=function(a){if(a.Jb)throw new O("internal-error","RecaptchaVerifier instance has been destroyed.");};ai.prototype.clear=function(){ei(this);this.Jb=!0;di().kd--;for(var a=0;a<this.K.length;a++)this.K[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.Cc){a=ld(this.ke);for(var b;b=a.firstChild;)a.removeChild(b)}};
var fi=Ia("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),gi=function(){this.kd=k.grecaptcha?Infinity:0;this.xe=null;this.hd="__rcb"+Math.floor(1E6*Math.random()).toString()},ci=function(a,b){return new C(function(c,d){if(Tf())if(!k.grecaptcha||b!==a.xe&&!a.kd){k[a.hd]=function(){if(k.grecaptcha){a.xe=b;var e=k.grecaptcha.render;k.grecaptcha.render=function(b,c){b=e(b,c);a.kd++;return b};c()}else d(new O("internal-error"));delete k[a.hd]};var e=Na(fi,{onload:a.hd,
hl:b||""});D(de(e)).f(function(){d(new O("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else c();else d(new O("network-request-failed"))})},hi=null,di=function(){hi||(hi=new gi);return hi},ii=function(a,b,c){try{this.j=c||firebase.app()}catch(f){throw new O("argument-error","No firebase.app.App instance is currently initialized.");}if(this.j.options&&this.j.options.apiKey)c=this.j.options.apiKey;else throw new O("invalid-api-key");var d=this,e=firebase.SDK_VERSION?If(firebase.SDK_VERSION):
null;ai.call(this,c,a,b,function(){try{var a=d.j.auth().ia}catch(g){a=null}return a},e,of(pf))};t(ii,ai);var ji=function(a){this.G=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.G)throw new O("internal-error","The React Native compatibility library was not found.");};h=ji.prototype;h.get=function(a){return D(this.G.getItem(a)).then(function(a){return a&&Qf(a)})};h.set=function(a,b){return D(this.G.setItem(a,Of(b)))};h.remove=function(a){return D(this.G.removeItem(a))};h.ib=function(){};h.Ya=function(){};var ki=function(){this.G={}};h=ki.prototype;h.get=function(a){return D(this.G[a])};h.set=function(a,b){this.G[a]=b;return D()};h.remove=function(a){delete this.G[a];return D()};h.ib=function(){};h.Ya=function(){};var mi=function(){if(!li()){if("Node"==Gf())throw new O("internal-error","The LocalStorage compatibility library was not found.");throw new O("web-storage-unsupported");}this.G=k.localStorage||firebase.INTERNAL.node.localStorage},li=function(){var a="Node"==Gf();a=k.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=mi.prototype;
h.get=function(a){var b=this;return D().then(function(){var c=b.G.getItem(a);return Qf(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=Of(b);null===d?c.remove(a):c.G.setItem(a,d)})};h.remove=function(a){var b=this;return D().then(function(){b.G.removeItem(a)})};h.ib=function(a){k.window&&kc(k.window,"storage",a)};h.Ya=function(a){k.window&&sc(k.window,"storage",a)};var ni=function(){this.G={}};h=ni.prototype;h.get=function(){return D(null)};h.set=function(){return D()};h.remove=function(){return D()};h.ib=function(){};h.Ya=function(){};var pi=function(){if(!oi()){if("Node"==Gf())throw new O("internal-error","The SessionStorage compatibility library was not found.");throw new O("web-storage-unsupported");}this.G=k.sessionStorage||firebase.INTERNAL.node.sessionStorage},oi=function(){var a="Node"==Gf();a=k.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=pi.prototype;
h.get=function(a){var b=this;return D().then(function(){var c=b.G.getItem(a);return Qf(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=Of(b);null===d?c.remove(a):c.G.setItem(a,d)})};h.remove=function(a){var b=this;return D().then(function(){b.G.removeItem(a)})};h.ib=function(){};h.Ya=function(){};var qi=function(a,b,c,d,e,f){if(!window.indexedDB)throw new O("web-storage-unsupported");this.tf=a;this.Ed=b;this.ld=c;this.$e=d;this.fb=e;this.Y={};this.fc=[];this.Vb=0;this.Mf=f||k.indexedDB},si,ti=function(a){return new C(function(b,c){var d=a.Mf.open(a.tf,a.fb);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Ed,{keyPath:a.ld})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},ui=function(a){a.Be||(a.Be=
ti(a));return a.Be},vi=function(a,b){return b.objectStore(a.Ed)},wi=function(a,b,c){return b.transaction([a.Ed],c?"readwrite":"readonly")},xi=function(a){return new C(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=qi.prototype;
h.set=function(a,b){var c=!1,d,e=this;return Ed(ui(this).then(function(b){d=b;b=vi(e,wi(e,d,!0));return xi(b.get(a))}).then(function(f){var g=vi(e,wi(e,d,!0));if(f)return f.value=b,xi(g.put(f));e.Vb++;c=!0;f={};f[e.ld]=a;f[e.$e]=b;return xi(g.add(f))}).then(function(){e.Y[a]=b}),function(){c&&e.Vb--})};h.get=function(a){var b=this;return ui(this).then(function(c){return xi(vi(b,wi(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
h.remove=function(a){var b=!1,c=this;return Ed(ui(this).then(function(d){b=!0;c.Vb++;return xi(vi(c,wi(c,d,!0))["delete"](a))}).then(function(){delete c.Y[a]}),function(){b&&c.Vb--})};
h.ug=function(){var a=this;return ui(this).then(function(b){var c=vi(a,wi(a,b,!1));return c.getAll?xi(c.getAll()):new C(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.Vb){for(d=0;d<b.length;d++)c[b[d][a.ld]]=b[d][a.$e];d=tf(a.Y,c);a.Y=c}return d})};h.ib=function(a){0==this.fc.length&&this.Zd();this.fc.push(a)};
h.Ya=function(a){Za(this.fc,function(b){return b==a});0==this.fc.length&&this.Sc()};h.Zd=function(){var a=this;this.Sc();var b=function(){a.Kd=Be(800).then(r(a.ug,a)).then(function(b){0<b.length&&x(a.fc,function(a){a(b)})}).then(b).f(function(a){"STOP_EVENT"!=a.message&&b()});return a.Kd};b()};h.Sc=function(){this.Kd&&this.Kd.cancel("STOP_EVENT")};var Bi=function(){this.oe={Browser:yi,Node:zi,ReactNative:Ai}[Gf()]},Ci,yi={B:mi,ae:pi},zi={B:mi,ae:pi},Ai={B:ji,ae:ni};var Di=function(a){this.yd(a)};
Di.prototype.yd=function(a){var b=a.url;if("undefined"===typeof b)throw new O("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new O("invalid-continue-uri");this.nf=b;this.ce=this.nc=null;this.Ce=!1;var c=a.android;if(c&&"object"===typeof c){b=c.packageName;var d=c.installApp;c=c.minimumVersion;if("string"===typeof b&&b.length){this.nc=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new O("argument-error","installApp property must be a boolean when specified.");this.Ce=
!!d;if("undefined"!==typeof c&&("string"!==typeof c||"string"===typeof c&&!c.length))throw new O("argument-error","minimumVersion property must be a non empty string when specified.");this.ce=c||null}else{if("undefined"!==typeof b)throw new O("argument-error","packageName property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new O("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new O("argument-error","android property must be a non null object when specified.");
this.vd=null;if((b=a.iOS)&&"object"===typeof b)if(b=b.bundleId,"string"===typeof b&&b.length)this.vd=b;else{if("undefined"!==typeof b)throw new O("argument-error","bundleId property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new O("argument-error","iOS property must be a non null object when specified.");a=a.handleCodeInApp;if("undefined"!==typeof a&&"boolean"!==typeof a)throw new O("argument-error","handleCodeInApp property must be a boolean when specified.");
if((this.ie=!!a)&&!this.vd&&!this.nc)throw new O("argument-error","handleCodeInApp property can't be true when no mobile application is provided.");};var Ei=function(a){var b={};b.continueUrl=a.nf;b.canHandleCodeInApp=a.ie;if(b.androidPackageName=a.nc)b.androidMinimumVersion=a.ce,b.androidInstallApp=a.Ce;b.iOSBundleId=a.vd;for(var c in b)null===b[c]&&delete b[c];return b};var Fi=function(a,b){this.rf=b;N(this,"verificationId",a)};Fi.prototype.confirm=function(a){a=Ng(this.verificationId,a);return this.rf(a)};var Gi=function(a,b,c,d){return(new Lg(a)).verifyPhoneNumber(b,c).then(function(a){return new Fi(a,d)})};var Hi=function(a){var b={},c=a.email,d=a.newEmail;a=a.requestType;if(!c||!a)throw Error("Invalid provider user info!");b.fromEmail=d||null;b.email=c;N(this,"operation",a);N(this,"data",dg(b))};var Ii=function(a,b,c,d,e,f){this.bg=a;this.jg=b;this.Ef=c;this.Hc=d;this.be=e;this.kg=!!f;this.sb=null;this.Ra=this.Hc;if(this.be<this.Hc)throw Error("Proactive refresh lower bound greater than upper bound!");};Ii.prototype.start=function(){this.Ra=this.Hc;Ji(this,!0)};
var Ki=function(a,b){if(b)return a.Ra=a.Hc,a.Ef();b=a.Ra;a.Ra*=2;a.Ra>a.be&&(a.Ra=a.be);return b},Ji=function(a,b){a.stop();a.sb=Be(Ki(a,b)).then(function(){return a.kg?D():Wf()}).then(function(){return a.bg()}).then(function(){Ji(a,!0)}).f(function(b){a.jg(b)&&Ji(a,!1)})};Ii.prototype.stop=function(){this.sb&&(this.sb.cancel(),this.sb=null)};var Qi=function(a){var b={};b["facebook.com"]=Li;b["google.com"]=Mi;b["github.com"]=Ni;b["twitter.com"]=Oi;var c=a&&a.providerId;return c?b[c]?new b[c](a):new Pi(a):null},Pi=function(a){var b=Qf(a.rawUserInfo||"{}");a=a.providerId;if(!a)throw Error("Invalid additional user info!");N(this,"profile",dg(b||{}));N(this,"providerId",a)},Li=function(a){Pi.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider id!");};t(Li,Pi);
var Ni=function(a){Pi.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider id!");N(this,"username",this.profile&&this.profile.login||null)};t(Ni,Pi);var Mi=function(a){Pi.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider id!");};t(Mi,Pi);var Oi=function(a){Pi.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider id!");N(this,"username",a.screenName||null)};t(Oi,Pi);var Ri={LOCAL:"local",NONE:"none",SESSION:"session"},Si=function(a){var b=new O("invalid-persistence-type"),c=new O("unsupported-persistence-type");a:{for(d in Ri)if(Ri[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(Gf()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!Kf()&&"none"!==a)throw c;}},Ti=function(a,b,c,d){this.Ge=a;this.Td=b;this.lg=c;this.dc=d;this.X={};Ci||(Ci=new Bi);a=Ci;try{if(qf()){si||(si=new qi("firebaseLocalStorageDb",
"firebaseLocalStorage","fbase_key","value",1));var e=si}else e=new a.oe.B;this.Le=e}catch(f){this.Le=new ki,this.dc=!0}try{this.Ve=new a.oe.ae}catch(f){this.Ve=new ki}this.Lf=new ki;this.$d=r(this.Te,this);this.Y={}},Ui,Vi=function(){Ui||(Ui=new Ti("firebase",":",!Rf(L())&&Ff()?!0:!1,Nf()));return Ui},Wi=function(a,b){switch(b){case "session":return a.Ve;case "none":return a.Lf;default:return a.Le}};h=Ti.prototype;h.ca=function(a,b){return this.Ge+this.Td+a.name+(b?this.Td+b:"")};
h.get=function(a,b){return Wi(this,a.B).get(this.ca(a,b))};h.remove=function(a,b){b=this.ca(a,b);"local"!=a.B||this.dc||(this.Y[b]=null);return Wi(this,a.B).remove(b)};h.set=function(a,b,c){var d=this.ca(a,c),e=this,f=Wi(this,a.B);return f.set(d,b).then(function(){return f.get(d)}).then(function(b){"local"!=a.B||e.dc||(e.Y[d]=b)})};h.addListener=function(a,b,c){a=this.ca(a,b);this.dc||(this.Y[a]=k.localStorage.getItem(a));jb(this.X)&&this.Zd();this.X[a]||(this.X[a]=[]);this.X[a].push(c)};
h.removeListener=function(a,b,c){a=this.ca(a,b);this.X[a]&&(Za(this.X[a],function(a){return a==c}),0==this.X[a].length&&delete this.X[a]);jb(this.X)&&this.Sc()};h.Zd=function(){Wi(this,"local").ib(this.$d);this.dc||qf()||Xi(this)};var Xi=function(a){Yi(a);a.Cd=setInterval(function(){for(var b in a.X){var c=k.localStorage.getItem(b),d=a.Y[b];c!=d&&(a.Y[b]=c,c=new Yb({type:"storage",key:b,target:window,oldValue:d,newValue:c,Jd:!0}),a.Te(c))}},1E3)},Yi=function(a){a.Cd&&(clearInterval(a.Cd),a.Cd=null)};
Ti.prototype.Sc=function(){Wi(this,"local").Ya(this.$d);Yi(this)};
Ti.prototype.Te=function(a){if(a&&a.Bf){var b=a.O.key;if(0==b.indexOf(this.Ge+this.Td)&&this.X[b]){"undefined"!==typeof a.O.Jd?Wi(this,"local").Ya(this.$d):Yi(this);if(this.lg){var c=k.localStorage.getItem(b),d=a.O.newValue;if(d!==c)null!==d?k.localStorage.setItem(b,d):k.localStorage.removeItem(b);else if(this.Y[b]===d&&"undefined"===typeof a.O.Jd)return}var e=this;c=function(){if("undefined"!==typeof a.O.Jd||e.Y[b]!==k.localStorage.getItem(b))e.Y[b]=k.localStorage.getItem(b),e.ge(b)};z&&Db&&10==
Db&&k.localStorage.getItem(b)!==a.O.newValue&&a.O.newValue!==a.O.oldValue?setTimeout(c,10):c()}}else x(a,r(this.ge,this))};Ti.prototype.ge=function(a){this.X[a]&&x(this.X[a],function(a){a()})};var Zi=function(a,b){this.i=a;this.h=b||Vi()},$i={name:"authEvent",B:"local"},aj=function(a){return a.h.get($i,a.i).then(function(a){return lg(a)})};Zi.prototype.hb=function(a){this.h.addListener($i,this.i,a)};Zi.prototype.cc=function(a){this.h.removeListener($i,this.i,a)};var bj=function(a){this.h=a||Vi()},cj={name:"sessionId",B:"session"};bj.prototype.uc=function(a){return this.h.get(cj,a)};var dj=function(a,b,c,d,e,f,g){this.C=a;this.o=b;this.u=c;this.Ka=d||null;this.V=g||null;this.Ue=b+":"+c;this.mg=new bj;this.se=new Zi(this.Ue);this.xd=null;this.ta=[];this.Qf=e||500;this.fg=f||2E3;this.Qb=this.Kc=null},ej=function(a){return new O("invalid-cordova-configuration",a)};
dj.prototype.Qa=function(){return this.Sb?this.Sb:this.Sb=Df().then(function(){if("function"!==typeof M("universalLinks.subscribe",k))throw ej("cordova-universal-links-plugin is not installed");if("undefined"===typeof M("BuildInfo.packageName",k))throw ej("cordova-plugin-buildinfo is not installed");if("function"!==typeof M("cordova.plugins.browsertab.openUrl",k))throw ej("cordova-plugin-browsertab is not installed");if("function"!==typeof M("cordova.InAppBrowser.open",k))throw ej("cordova-plugin-inappbrowser is not installed");
},function(){throw new O("cordova-not-ready");})};var fj=function(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")},gj=function(a){var b=new Tb;b.update(a);return bb(b.digest())};h=dj.prototype;h.ec=function(a,b){b(new O("operation-not-supported-in-this-environment"));return D()};h.Zb=function(){return E(new O("operation-not-supported-in-this-environment"))};h.We=function(){return!1};h.Se=function(){return!0};
h.we=function(){return!0};
h.$b=function(a,b,c){if(this.Kc)return E(new O("redirect-operation-pending"));var d=this,e=k.document,f=null,g=null,l=null,n=null;return this.Kc=Ed(D().then(function(){Pg(b);return hj(d)}).then(function(){return ij(d,a,b,c)}).then(function(){return(new C(function(a,b){g=function(){var b=M("cordova.plugins.browsertab.close",k);a();"function"===typeof b&&b();d.Qb&&"function"===typeof d.Qb.close&&(d.Qb.close(),d.Qb=null);return!1};d.hb(g);l=function(){f||(f=Be(d.fg).then(function(){b(new O("redirect-cancelled-by-user"))}))};n=
function(){Vf()&&l()};e.addEventListener("resume",l,!1);L().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",n,!1)})).f(function(a){return jj(d).then(function(){throw a;})})}),function(){l&&e.removeEventListener("resume",l,!1);n&&e.removeEventListener("visibilitychange",n,!1);f&&f.cancel();g&&d.cc(g);d.Kc=null})};
var ij=function(a,b,c,d){var e=fj(),f=new kg(b,d,null,e,new O("no-auth-event")),g=M("BuildInfo.packageName",k);if("string"!==typeof g)throw new O("invalid-cordova-configuration");var l=M("BuildInfo.displayName",k),n={};if(L().toLowerCase().match(/iphone|ipad|ipod/))n.ibi=g;else if(L().toLowerCase().match(/android/))n.apn=g;else return E(new O("operation-not-supported-in-this-environment"));l&&(n.appDisplayName=l);e=gj(e);n.sessionId=e;var F=$h(a.C,a.o,a.u,b,c,null,d,a.Ka,n,a.V);return a.Qa().then(function(){var b=
a.Ue;return a.mg.h.set($i,f.I(),b)}).then(function(){var b=M("cordova.plugins.browsertab.isAvailable",k);if("function"!==typeof b)throw new O("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=M("cordova.plugins.browsertab.openUrl",k);if("function"!==typeof c)throw new O("invalid-cordova-configuration");c(F)}else{c=M("cordova.InAppBrowser.open",k);if("function"!==typeof c)throw new O("invalid-cordova-configuration");b=c;var d=L();d=!(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.Qb=b(F,d?"_blank":"_system","location=yes")}})})};dj.prototype.Kb=function(a){for(var b=0;b<this.ta.length;b++)try{this.ta[b](a)}catch(c){}};
var hj=function(a){a.xd||(a.xd=a.Qa().then(function(){return new C(function(b){var c=function(d){b(d);a.cc(c);return!1};a.hb(c);kj(a)})}));return a.xd},jj=function(a){var b=null;return aj(a.se).then(function(c){b=c;c=a.se;return c.h.remove($i,c.i)}).then(function(){return b})},kj=function(a){var b=M("universalLinks.subscribe",k);if("function"!==typeof b)throw new O("invalid-cordova-configuration");var c=new kg("unknown",null,null,null,new O("no-auth-event")),d=!1,e=Be(a.Qf).then(function(){return jj(a).then(function(){d||
a.Kb(c)})}),f=function(b){d=!0;e&&e.cancel();jj(a).then(function(d){var e=c;if(d&&b&&b.url){e=null;var f=b.url;var g=gf(f),l=ff(g,"link"),n=ff(gf(l),"link");g=ff(g,"deep_link_id");f=ff(gf(g),"link")||g||n||l||f;-1!=f.indexOf("/__/auth/callback")&&(e=gf(f),e=Qf(ff(e,"firebaseError")||null),e=(e="object"===typeof e?jg(e):null)?new kg(d.ma,d.W,null,null,e):new kg(d.ma,d.W,f,d.uc()));e=e||c}a.Kb(e)})},g=k.handleOpenURL;k.handleOpenURL=function(a){0==a.toLowerCase().indexOf(M("BuildInfo.packageName",k).toLowerCase()+
"://")&&f({url:a});if("function"===typeof g)try{g(a)}catch(n){console.error(n)}};b(null,f)};dj.prototype.hb=function(a){this.ta.push(a);hj(this).f(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new kg("unknown",null,null,null,new O("no-auth-event")),a(b))})};dj.prototype.cc=function(a){Za(this.ta,function(b){return b==a})};var lj=function(a){this.i=a;this.h=Vi()},mj={name:"pendingRedirect",B:"session"},nj=function(a){return a.h.set(mj,"pending",a.i)},oj=function(a){return a.h.remove(mj,a.i)},pj=function(a){return a.h.get(mj,a.i).then(function(a){return"pending"==a})};var tj=function(a,b,c){this.C=a;this.o=b;this.u=c;this.gc=[];this.qb=!1;this.ed=r(this.td,this);this.Wa=new qj(this);this.Ld=new rj(this);this.Wb=new lj(this.o+":"+this.u);this.Ha={};this.Ha.unknown=this.Wa;this.Ha.signInViaRedirect=this.Wa;this.Ha.linkViaRedirect=this.Wa;this.Ha.reauthViaRedirect=this.Wa;this.Ha.signInViaPopup=this.Ld;this.Ha.linkViaPopup=this.Ld;this.Ha.reauthViaPopup=this.Ld;this.Z=sj(this.C,this.o,this.u,pf)},sj=function(a,b,c,d){var e=firebase.SDK_VERSION||null;return Cf()?new dj(a,
b,c,e,void 0,void 0,d):new Wh(a,b,c,e,d)};tj.prototype.reset=function(){this.qb=!1;this.Z.cc(this.ed);this.Z=sj(this.C,this.o,this.u)};tj.prototype.Rb=function(){var a=this;this.qb||(this.qb=!0,this.Z.hb(this.ed));var b=this.Z;return this.Z.Qa().f(function(c){a.Z==b&&a.reset();throw c;})};var wj=function(a){a.Z.Se()&&a.Rb().f(function(b){var c=new kg("unknown",null,null,null,new O("operation-not-supported-in-this-environment"));uj(b)&&a.td(c)});a.Z.we()||vj(a.Wa)};
tj.prototype.subscribe=function(a){Wa(this.gc,a)||this.gc.push(a);if(!this.qb){var b=this;pj(this.Wb).then(function(a){a?oj(b.Wb).then(function(){b.Rb().f(function(a){var c=new kg("unknown",null,null,null,new O("operation-not-supported-in-this-environment"));uj(a)&&b.td(c)})}):wj(b)}).f(function(){wj(b)})}};tj.prototype.unsubscribe=function(a){Za(this.gc,function(b){return b==a})};
tj.prototype.td=function(a){if(!a)throw new O("invalid-auth-event");for(var b=!1,c=0;c<this.gc.length;c++){var d=this.gc[c];if(d.he(a.ma,a.W)){(b=this.Ha[a.ma])&&b.Me(a,d);b=!0;break}}vj(this.Wa);return b};var xj=new Uf(2E3,1E4),yj=new Uf(3E4,6E4);tj.prototype.getRedirectResult=function(){return this.Wa.getRedirectResult()};tj.prototype.Zb=function(a,b,c,d,e){var f=this;return this.Z.Zb(a,b,c,function(){f.qb||(f.qb=!0,f.Z.hb(f.ed))},function(){f.reset()},d,e)};
var uj=function(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1};tj.prototype.$b=function(a,b,c){var d=this,e;return nj(this.Wb).then(function(){return d.Z.$b(a,b,c).f(function(a){if(uj(a))throw new O("operation-not-supported-in-this-environment");e=a;return oj(d.Wb).then(function(){throw e;})}).then(function(){return d.Z.We()?new C(function(){}):oj(d.Wb).then(function(){return d.getRedirectResult()}).then(function(){}).f(function(){})})})};
tj.prototype.ec=function(a,b,c,d){return this.Z.ec(c,function(c){a.$a(b,null,c,d)},xj.get())};var zj={},Aj=function(a,b,c){var d=b+":"+c;zj[d]||(zj[d]=new tj(a,b,c));return zj[d]},qj=function(a){this.h=a;this.zb=null;this.bc=[];this.ac=[];this.wb=null;this.Od=!1};qj.prototype.reset=function(){this.zb=null;this.wb&&(this.wb.cancel(),this.wb=null)};
qj.prototype.Me=function(a,b){if(!a)return E(new O("invalid-auth-event"));this.reset();this.Od=!0;var c=a.ma,d=a.W,e=a.getError()&&"auth/web-storage-unsupported"==a.getError().code,f=a.getError()&&"auth/operation-not-supported-in-this-environment"==a.getError().code;"unknown"!=c||e||f?a=a.ba?this.Md(a,b):b.Mb(c,d)?this.Nd(a,b):E(new O("invalid-auth-event")):(Bj(this,!1,null,null),a=D());return a};var vj=function(a){a.Od||(a.Od=!0,Bj(a,!1,null,null))};
qj.prototype.Md=function(a){Bj(this,!0,null,a.getError());return D()};qj.prototype.Nd=function(a,b){var c=this;b=b.Mb(a.ma,a.W);var d=a.Db,e=a.uc(),f=!!a.ma.match(/Redirect$/);return b(d,e).then(function(a){Bj(c,f,a,null)}).f(function(a){Bj(c,f,null,a)})};
var Cj=function(a,b){a.zb=function(){return E(b)};if(a.ac.length)for(var c=0;c<a.ac.length;c++)a.ac[c](b)},Dj=function(a,b){a.zb=function(){return D(b)};if(a.bc.length)for(var c=0;c<a.bc.length;c++)a.bc[c](b)},Bj=function(a,b,c,d){b?d?Cj(a,d):Dj(a,c):Dj(a,{user:null});a.bc=[];a.ac=[]};qj.prototype.getRedirectResult=function(){var a=this;return new C(function(b,c){a.zb?a.zb().then(b,c):(a.bc.push(b),a.ac.push(c),Ej(a))})};
var Ej=function(a){var b=new O("timeout");a.wb&&a.wb.cancel();a.wb=Be(yj.get()).then(function(){a.zb||Bj(a,!0,null,b)})},rj=function(a){this.h=a};rj.prototype.Me=function(a,b){if(!a)return E(new O("invalid-auth-event"));var c=a.ma,d=a.W;return a.ba?this.Md(a,b):b.Mb(c,d)?this.Nd(a,b):E(new O("invalid-auth-event"))};rj.prototype.Md=function(a,b){b.$a(a.ma,null,a.getError(),a.W);return D()};
rj.prototype.Nd=function(a,b){var c=a.W,d=a.ma,e=b.Mb(d,c),f=a.Db;a=a.uc();return e(f,a).then(function(a){b.$a(d,a,null,c)}).f(function(a){b.$a(d,null,a,c)})};var Fj=function(a){this.g=a;this.Ia=this.fa=null;this.Ma=0};Fj.prototype.I=function(){return{apiKey:this.g.o,refreshToken:this.fa,accessToken:this.Ia,expirationTime:this.Ma}};
var Hj=function(a,b){var c=b.idToken,d=b.refreshToken;b=Gj(b.expiresIn);a.Ia=c;a.Ma=b;a.fa=d},Gj=function(a){return na()+1E3*parseInt(a,10)},Ij=function(a,b){return dh(a.g,b).then(function(b){a.Ia=b.access_token;a.Ma=Gj(b.expires_in);a.fa=b.refresh_token;return{accessToken:a.Ia,expirationTime:a.Ma,refreshToken:a.fa}}).f(function(b){"auth/user-token-expired"==b.code&&(a.fa=null);throw b;})};
Fj.prototype.getToken=function(a){a=!!a;return this.Ia&&!this.fa?E(new O("user-token-expired")):a||!this.Ia||na()>this.Ma-3E4?this.fa?Ij(this,{grant_type:"refresh_token",refresh_token:this.fa}):D(null):D({accessToken:this.Ia,expirationTime:this.Ma,refreshToken:this.fa})};var Jj=function(a,b,c,d,e,f){$f(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})},Kj=function(a,b){B.call(this,a);for(var c in b)this[c]=b[c]};t(Kj,B);
var S=function(a,b,c){this.K=[];this.o=a.apiKey;this.u=a.appName;this.C=a.authDomain||null;a=firebase.SDK_VERSION?If(firebase.SDK_VERSION):null;this.g=new R(this.o,of(pf),a);this.ra=new Fj(this.g);Lj(this,b.idToken);Hj(this.ra,b);N(this,"refreshToken",this.ra.fa);Mj(this,c||{});G.call(this);this.Lc=!1;this.C&&Mf()&&(this.v=Aj(this.C,this.o,this.u));this.Rc=[];this.sa=null;this.ub=Nj(this);this.Fb=r(this.ud,this);var d=this;this.ia=null;this.Ie=function(a){d.Bb(a.Tf)};this.Ad=null};t(S,G);
S.prototype.Bb=function(a){this.ia=a;Yg(this.g,a)};var Oj=function(a,b){a.Ad&&sc(a.Ad,"languageCodeChanged",a.Ie);(a.Ad=b)&&kc(b,"languageCodeChanged",a.Ie)};S.prototype.ud=function(){this.ub.sb&&(this.ub.stop(),this.ub.start())};
var Pj=function(a){try{return firebase.app(a.u).auth()}catch(b){throw new O("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.u+"'!");}},Nj=function(a){return new Ii(function(){return a.getIdToken(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.ra.Ma-na()-3E5;return 0<b?b:0},3E4,96E4,!1)},Qj=function(a){a.Jb||a.ub.sb||(a.ub.start(),sc(a,"tokenChanged",a.Fb),kc(a,"tokenChanged",a.Fb))},Rj=function(a){sc(a,"tokenChanged",
a.Fb);a.ub.stop()},Lj=function(a,b){a.De=b;N(a,"_lat",b)},Sj=function(a,b){Za(a.Rc,function(a){return a==b})},Tj=function(a){for(var b=[],c=0;c<a.Rc.length;c++)b.push(a.Rc[c](a));return Bd(b).then(function(){return a})},Uj=function(a){a.v&&!a.Lc&&(a.Lc=!0,a.v.subscribe(a))},Mj=function(a,b){$f(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,providerData:[]})};
N(S.prototype,"providerId","firebase");var Vj=function(){},Wj=function(a){return D().then(function(){if(a.Jb)throw new O("app-deleted");})},Xj=function(a){return Sa(a.providerData,function(a){return a.providerId})},Zj=function(a,b){b&&(Yj(a,b.providerId),a.providerData.push(b))},Yj=function(a,b){Za(a.providerData,function(a){return a.providerId==b})},ak=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&N(a,b,c)};
S.prototype.copy=function(a){var b=this;b!=a&&($f(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,phoneNumber:a.phoneNumber,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){Zj(b,a)}),this.ra=a.ra,N(this,"refreshToken",this.ra.fa))};S.prototype.reload=function(){var a=this;return this.c(Wj(this).then(function(){return bk(a).then(function(){return Tj(a)}).then(Vj)}))};
var bk=function(a){return a.getIdToken().then(function(b){var c=a.isAnonymous;return ck(a,b).then(function(){c||ak(a,"isAnonymous",!1);return b})})};S.prototype.getIdToken=function(a){var b=this;return this.c(Wj(this).then(function(){return b.ra.getToken(a)}).then(function(a){if(!a)throw new O("internal-error");a.accessToken!=b.De&&(Lj(b,a.accessToken),b.Sa());ak(b,"refreshToken",a.refreshToken);return a.accessToken}))};
S.prototype.getToken=function(a){Xf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]||(Xf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."));return this.getIdToken(a)};
var dk=function(a,b){b.idToken&&a.De!=b.idToken&&(Hj(a.ra,b),a.Sa(),Lj(a,b.idToken),ak(a,"refreshToken",a.ra.fa))};S.prototype.Sa=function(){this.dispatchEvent(new Kj("tokenChanged"))};var ck=function(a,b){return Q(a.g,Gh,{idToken:b}).then(r(a.cg,a))};
S.prototype.cg=function(a){a=a.users;if(!a||!a.length)throw new O("internal-error");a=a[0];Mj(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber});for(var b=ek(a),c=0;c<b.length;c++)Zj(this,b[c]);ak(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
var ek=function(a){return(a=a.providerUserInfo)&&a.length?Sa(a,function(a){return new Jj(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl,a.phoneNumber)}):[]};S.prototype.reauthenticateAndRetrieveDataWithCredential=function(a){var b=this,c=null;return this.c(a.Dd(this.g,this.uid).then(function(a){dk(b,a);c=fk(b,a,"reauthenticate");b.sa=null;return b.reload()}).then(function(){return c}),!0)};S.prototype.reauthenticateWithCredential=function(a){return this.reauthenticateAndRetrieveDataWithCredential(a).then(function(){})};
var gk=function(a,b){return bk(a).then(function(){if(Wa(Xj(a),b))return Tj(a).then(function(){throw new O("provider-already-linked");})})};S.prototype.linkAndRetrieveDataWithCredential=function(a){var b=this,c=null;return this.c(gk(this,a.providerId).then(function(){return b.getIdToken()}).then(function(c){return a.Gc(b.g,c)}).then(function(a){c=fk(b,a,"link");return hk(b,a)}).then(function(){return c}))};S.prototype.linkWithCredential=function(a){return this.linkAndRetrieveDataWithCredential(a).then(function(a){return a.user})};
S.prototype.linkWithPhoneNumber=function(a,b){var c=this;return this.c(gk(this,"phone").then(function(){return Gi(Pj(c),a,b,r(c.linkAndRetrieveDataWithCredential,c))}))};S.prototype.reauthenticateWithPhoneNumber=function(a,b){var c=this;return this.c(D().then(function(){return Gi(Pj(c),a,b,r(c.reauthenticateAndRetrieveDataWithCredential,c))}),!0)};var fk=function(a,b,c){var d=Og(b);b=Qi(b);return ag({user:a,credential:d,additionalUserInfo:b,operationType:c})},hk=function(a,b){dk(a,b);return a.reload().then(function(){return a})};
h=S.prototype;h.updateEmail=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return b.g.updateEmail(c,a)}).then(function(a){dk(b,a);return b.reload()}))};h.updatePhoneNumber=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return a.Gc(b.g,c)}).then(function(a){dk(b,a);return b.reload()}))};h.updatePassword=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return b.g.updatePassword(c,a)}).then(function(a){dk(b,a);return b.reload()}))};
h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Wj(this);var b=this;return this.c(this.getIdToken().then(function(c){return b.g.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){dk(b,a);ak(b,"displayName",a.displayName||null);ak(b,"photoURL",a.photoUrl||null);x(b.providerData,function(a){"password"===a.providerId&&(N(a,"displayName",b.displayName),N(a,"photoURL",b.photoURL))});return Tj(b)}).then(Vj))};
h.unlink=function(a){var b=this;return this.c(bk(this).then(function(c){return Wa(Xj(b),a)?uh(b.g,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0});x(Xj(b),function(a){c[a]||Yj(b,a)});c[Lg.PROVIDER_ID]||N(b,"phoneNumber",null);return Tj(b)}):Tj(b).then(function(){throw new O("no-such-provider");})}))};
h["delete"]=function(){var a=this;return this.c(this.getIdToken().then(function(b){return Q(a.g,Fh,{idToken:b})}).then(function(){a.dispatchEvent(new Kj("userDeleted"))})).then(function(){for(var b=0;b<a.K.length;b++)a.K[b].cancel("app-deleted");Oj(a,null);a.K=[];a.Jb=!0;Rj(a);N(a,"refreshToken",null);a.v&&a.v.unsubscribe(a)})};
h.he=function(a,b){return"linkViaPopup"==a&&(this.la||null)==b&&this.ka||"reauthViaPopup"==a&&(this.la||null)==b&&this.ka||"linkViaRedirect"==a&&(this.Ga||null)==b||"reauthViaRedirect"==a&&(this.Ga||null)==b?!0:!1};h.$a=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.la||null)||(c&&this.Ua?this.Ua(c):b&&!c&&this.ka&&this.ka(b),this.M&&(this.M.cancel(),this.M=null),delete this.ka,delete this.Ua)};
h.Mb=function(a,b){return"linkViaPopup"==a&&b==(this.la||null)?r(this.qe,this):"reauthViaPopup"==a&&b==(this.la||null)?r(this.re,this):"linkViaRedirect"==a&&(this.Ga||null)==b?r(this.qe,this):"reauthViaRedirect"==a&&(this.Ga||null)==b?r(this.re,this):null};h.tc=function(){return Jf(this.uid+":::")};h.linkWithPopup=function(a){var b=this;return ik(this,"linkViaPopup",a,function(){return gk(b,a.providerId).then(function(){return Tj(b)})},!1)};
h.reauthenticateWithPopup=function(a){return ik(this,"reauthViaPopup",a,function(){return D()},!0)};
var ik=function(a,b,c,d,e){if(!Mf())return E(new O("operation-not-supported-in-this-environment"));if(a.sa&&!e)return E(a.sa);var f=hg(c.providerId),g=a.tc(),l=null;(!Nf()||Ff())&&a.C&&c.isOAuthProvider&&(l=$h(a.C,a.o,a.u,b,c,null,g,firebase.SDK_VERSION||null));var n=yf(l,f&&f.Yb,f&&f.Xb);d=d().then(function(){jk(a);if(!e)return a.getIdToken().then(function(){})}).then(function(){return a.v.Zb(n,b,c,g,!!l)}).then(function(){return new C(function(c,d){a.$a(b,null,new O("cancelled-popup-request"),a.la||
null);a.ka=c;a.Ua=d;a.la=g;a.M=a.v.ec(a,b,n,g)})}).then(function(a){n&&xf(n);return a?ag(a):null}).f(function(a){n&&xf(n);throw a;});return a.c(d,e)};S.prototype.linkWithRedirect=function(a){var b=this;return kk(this,"linkViaRedirect",a,function(){return gk(b,a.providerId)},!1)};S.prototype.reauthenticateWithRedirect=function(a){return kk(this,"reauthViaRedirect",a,function(){return D()},!0)};
var kk=function(a,b,c,d,e){if(!Mf())return E(new O("operation-not-supported-in-this-environment"));if(a.sa&&!e)return E(a.sa);var f=null,g=a.tc();d=d().then(function(){jk(a);if(!e)return a.getIdToken().then(function(){})}).then(function(){a.Ga=g;return Tj(a)}).then(function(b){a.Xa&&(b=a.Xa,b=b.h.set(lk,a.I(),b.i));return b}).then(function(){return a.v.$b(b,c,g)}).f(function(b){f=b;if(a.Xa)return mk(a.Xa);throw f;}).then(function(){if(f)throw f;});return a.c(d,e)},jk=function(a){if(!a.v||!a.Lc){if(a.v&&
!a.Lc)throw new O("internal-error");throw new O("auth-domain-config-required");}};S.prototype.qe=function(a,b){var c=this;this.M&&(this.M.cancel(),this.M=null);var d=null,e=this.getIdToken().then(function(d){return sg(c.g,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=fk(c,a,"link");return hk(c,a)}).then(function(){return d});return this.c(e)};
S.prototype.re=function(a,b){var c=this;this.M&&(this.M.cancel(),this.M=null);var d=null,e=D().then(function(){return og(tg(c.g,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=fk(c,a,"reauthenticate");dk(c,a);c.sa=null;return c.reload()}).then(function(){return d});return this.c(e,!0)};
S.prototype.sendEmailVerification=function(a){var b=this,c=null;return this.c(this.getIdToken().then(function(b){c=b;return"undefined"===typeof a||jb(a)?{}:Ei(new Di(a))}).then(function(a){return b.g.sendEmailVerification(c,a)}).then(function(a){if(b.email!=a)return b.reload()}).then(function(){}))};S.prototype.c=function(a,b){var c=this,d=nk(this,a,b);this.K.push(d);Ed(d,function(){Ya(c.K,d)});return d};
var nk=function(a,b,c){return a.sa&&!c?(b.cancel(),E(a.sa)):b.f(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.sa||a.dispatchEvent(new Kj("userInvalidated")),a.sa=b);throw b;})};S.prototype.toJSON=function(){return this.I()};
S.prototype.I=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.o,appName:this.u,authDomain:this.C,stsTokenManager:this.ra.I(),redirectEventId:this.Ga||null};x(this.providerData,function(b){a.providerData.push(bg(b))});return a};
var ok=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-na())/1E3;else return null;var d=new S(b,c,a);a.providerData&&x(a.providerData,function(a){a&&Zj(d,ag(a))});a.redirectEventId&&(d.Ga=a.redirectEventId);return d},
pk=function(a,b,c){var d=new S(a,b);c&&(d.Xa=c);return d.reload().then(function(){return d})};var qk=function(a){this.i=a;this.h=Vi()},lk={name:"redirectUser",B:"session"},mk=function(a){return a.h.remove(lk,a.i)},rk=function(a,b){return a.h.get(lk,a.i).then(function(a){a&&b&&(a.authDomain=b);return ok(a||{})})};var tk=function(a,b){this.i=a;this.h=b||Vi();this.N=null;this.Gd=this.yd();this.h.addListener(sk("local"),this.i,r(this.sg,this))};tk.prototype.sg=function(){var a=this,b=sk("local");uk(this,function(){return D().then(function(){return a.N&&"local"!=a.N.B?a.h.get(b,a.i):null}).then(function(c){if(c)return vk(a,"local").then(function(){a.N=b})})})};var vk=function(a,b){var c=[],d;for(d in Ri)Ri[d]!==b&&c.push(a.h.remove(sk(Ri[d]),a.i));c.push(a.h.remove(wk,a.i));return Ad(c)};
tk.prototype.yd=function(){var a=this,b=sk("local"),c=sk("session"),d=sk("none");return this.h.get(c,this.i).then(function(e){return e?c:a.h.get(d,a.i).then(function(c){return c?d:a.h.get(b,a.i).then(function(c){return c?b:a.h.get(wk,a.i).then(function(a){return a?sk(a):b})})})}).then(function(b){a.N=b;return vk(a,b.B)}).f(function(){a.N||(a.N=b)})};var wk={name:"persistence",B:"session"},sk=function(a){return{name:"authUser",B:a}};
tk.prototype.setPersistence=function(a){var b=null,c=this;Si(a);return uk(this,function(){return a!=c.N.B?c.h.get(c.N,c.i).then(function(d){b=d;return vk(c,a)}).then(function(){c.N=sk(a);if(b)return c.h.set(c.N,b,c.i)}):D()})};
var xk=function(a){return uk(a,function(){return a.h.set(wk,a.N.B,a.i)})},yk=function(a,b){return uk(a,function(){return a.h.set(a.N,b.I(),a.i)})},zk=function(a){return uk(a,function(){return a.h.remove(a.N,a.i)})},Ak=function(a,b){return uk(a,function(){return a.h.get(a.N,a.i).then(function(a){a&&b&&(a.authDomain=b);return ok(a||{})})})},uk=function(a,b){a.Gd=a.Gd.then(b,b);return a.Gd};var T=function(a){this.Da=!1;N(this,"app",a);if(this.j().options&&this.j().options.apiKey)a=firebase.SDK_VERSION?If(firebase.SDK_VERSION):null,this.g=new R(this.j().options&&this.j().options.apiKey,of(pf),a);else throw new O("invalid-api-key");this.K=[];this.Ja=[];this.Eb=[];this.Zf=firebase.INTERNAL.createSubscribe(r(this.Nf,this));this.kc=void 0;this.ag=firebase.INTERNAL.createSubscribe(r(this.Pf,this));Bk(this,null);a=this.j().options.apiKey;var b=this.j().name;this.na=new tk(a+":"+b);a=this.j().options.apiKey;
b=this.j().name;this.xb=new qk(a+":"+b);this.oc=this.c(Ck(this));this.ya=this.c(Dk(this));this.Dc=!1;this.sd=r(this.tg,this);this.Ze=r(this.nb,this);this.Fb=r(this.ud,this);this.Xe=r(this.If,this);this.Ye=r(this.Jf,this);Ek(this);this.INTERNAL={};this.INTERNAL["delete"]=r(this["delete"],this);this.Na=0;G.call(this);Fk(this)};t(T,G);var Gk=function(a){B.call(this,"languageCodeChanged");this.Tf=a};t(Gk,B);T.prototype.setPersistence=function(a){a=this.na.setPersistence(a);return this.c(a)};
T.prototype.Bb=function(a){this.ia===a||this.Da||(this.ia=a,Yg(this.g,this.ia),this.dispatchEvent(new Gk(this.ia)))};T.prototype.zg=function(){var a=k.navigator;this.Bb(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};var Fk=function(a){Object.defineProperty(a,"lc",{get:function(){return this.ia},set:function(a){this.Bb(a)},enumerable:!1});a.ia=null};
T.prototype.toJSON=function(){return{apiKey:this.j().options.apiKey,authDomain:this.j().options.authDomain,appName:this.j().name,currentUser:U(this)&&U(this).I()}};var Hk=function(a){return a.uf||E(new O("auth-domain-config-required"))},Ek=function(a){var b=a.j().options.authDomain,c=a.j().options.apiKey;b&&Mf()&&(a.uf=a.oc.then(function(){if(!a.Da){a.v=Aj(b,c,a.j().name);a.v.subscribe(a);U(a)&&Uj(U(a));if(a.yb){Uj(a.yb);var d=a.yb;d.Bb(a.ia);Oj(d,a);a.yb=null}return a.v}}))};h=T.prototype;
h.he=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.la==b&&!!this.ka;default:return!1}};h.$a=function(a,b,c,d){"signInViaPopup"==a&&this.la==d&&(c&&this.Ua?this.Ua(c):b&&!c&&this.ka&&this.ka(b),this.M&&(this.M.cancel(),this.M=null),delete this.ka,delete this.Ua)};h.Mb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.la==b&&this.ka?r(this.wf,this):null};
h.wf=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.M&&(this.M.cancel(),this.M=null);var d=null,e=null,f=qg(c.g,a).then(function(a){d=Og(a);e=Qi(a);return a});a=c.oc.then(function(){return f}).then(function(a){return Ik(c,a)}).then(function(){return ag({user:U(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return this.c(a)};h.tc=function(){return Jf()};
h.signInWithPopup=function(a){if(!Mf())return E(new O("operation-not-supported-in-this-environment"));var b=this,c=hg(a.providerId),d=this.tc(),e=null;(!Nf()||Ff())&&this.j().options.authDomain&&a.isOAuthProvider&&(e=$h(this.j().options.authDomain,this.j().options.apiKey,this.j().name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=yf(e,c&&c.Yb,c&&c.Xb);c=Hk(this).then(function(b){return b.Zb(f,"signInViaPopup",a,d,!!e)}).then(function(){return new C(function(a,c){b.$a("signInViaPopup",
null,new O("cancelled-popup-request"),b.la);b.ka=a;b.Ua=c;b.la=d;b.M=b.v.ec(b,"signInViaPopup",f,d)})}).then(function(a){f&&xf(f);return a?ag(a):null}).f(function(a){f&&xf(f);throw a;});return this.c(c)};h.signInWithRedirect=function(a){if(!Mf())return E(new O("operation-not-supported-in-this-environment"));var b=this,c=Hk(this).then(function(){return xk(b.na)}).then(function(){return b.v.$b("signInViaRedirect",a)});return this.c(c)};
h.getRedirectResult=function(){if(!Mf())return E(new O("operation-not-supported-in-this-environment"));var a=this,b=Hk(this).then(function(){return a.v.getRedirectResult()}).then(function(a){return a?ag(a):null});return this.c(b)};
var Ik=function(a,b){var c={};c.apiKey=a.j().options.apiKey;c.authDomain=a.j().options.authDomain;c.appName=a.j().name;return a.oc.then(function(){return pk(c,b,a.xb)}).then(function(b){if(U(a)&&b.uid==U(a).uid)return U(a).copy(b),a.nb(b);Bk(a,b);Uj(b);return a.nb(b)}).then(function(){a.Sa()})},Bk=function(a,b){U(a)&&(Sj(U(a),a.Ze),sc(U(a),"tokenChanged",a.Fb),sc(U(a),"userDeleted",a.Xe),sc(U(a),"userInvalidated",a.Ye),Rj(U(a)));b&&(b.Rc.push(a.Ze),kc(b,"tokenChanged",a.Fb),kc(b,"userDeleted",a.Xe),
kc(b,"userInvalidated",a.Ye),0<a.Na&&Qj(b));N(a,"currentUser",b);b&&(b.Bb(a.ia),Oj(b,a))};T.prototype.signOut=function(){var a=this,b=this.ya.then(function(){if(!U(a))return D();Bk(a,null);return zk(a.na).then(function(){a.Sa()})});return this.c(b)};
var Jk=function(a){var b=a.j().options.authDomain;b=rk(a.xb,b).then(function(b){if(a.yb=b)b.Xa=a.xb;return mk(a.xb)});return a.c(b)},Ck=function(a){var b=a.j().options.authDomain,c=Jk(a).then(function(){return Ak(a.na,b)}).then(function(b){return b?(b.Xa=a.xb,a.yb&&(a.yb.Ga||null)==(b.Ga||null)?b:b.reload().then(function(){return yk(a.na,b).then(function(){return b})}).f(function(c){return"auth/network-request-failed"==c.code?b:zk(a.na)})):null}).then(function(b){Bk(a,b||null)});return a.c(c)},Dk=
function(a){return a.oc.then(function(){return a.getRedirectResult()}).f(function(){}).then(function(){if(!a.Da)return a.sd()}).f(function(){}).then(function(){if(!a.Da){a.Dc=!0;var b=a.na;b.h.addListener(sk("local"),b.i,a.sd)}})};h=T.prototype;
h.tg=function(){var a=this,b=this.j().options.authDomain;return Ak(this.na,b).then(function(b){if(!a.Da){var c;if(c=U(a)&&b){c=U(a).uid;var e=b.uid;c=void 0===c||null===c||""===c||void 0===e||null===e||""===e?!1:c==e}if(c)return U(a).copy(b),U(a).getIdToken();if(U(a)||b)Bk(a,b),b&&(Uj(b),b.Xa=a.xb),a.v&&a.v.subscribe(a),a.Sa()}})};h.nb=function(a){return yk(this.na,a)};h.ud=function(){this.Sa();this.nb(U(this))};h.If=function(){this.signOut()};h.Jf=function(){this.signOut()};
var Kk=function(a,b){var c=null,d=null;return a.c(b.then(function(b){c=Og(b);d=Qi(b);return Ik(a,b)}).then(function(){return ag({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))};h=T.prototype;h.Nf=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};h.Pf=function(a){var b=this;Lk(this,function(){a.next(U(b))})};
h.onIdTokenChanged=function(a,b,c){var d=this;this.Dc&&firebase.Promise.resolve().then(function(){p(a)?a(U(d)):p(a.next)&&a.next(U(d))});return this.Zf(a,b,c)};h.onAuthStateChanged=function(a,b,c){var d=this;this.Dc&&firebase.Promise.resolve().then(function(){d.kc=d.getUid();p(a)?a(U(d)):p(a.next)&&a.next(U(d))});return this.ag(a,b,c)};h.Cf=function(a){var b=this,c=this.ya.then(function(){return U(b)?U(b).getIdToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};
h.signInWithCustomToken=function(a){var b=this;return this.ya.then(function(){return Kk(b,Q(b.g,Ih,{token:a}))}).then(function(a){a=a.user;ak(a,"isAnonymous",!1);return b.nb(a)}).then(function(){return U(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.ya.then(function(){return Kk(c,Q(c.g,Eg,{email:a,password:b}))}).then(function(a){return a.user})};h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.ya.then(function(){return Kk(c,Q(c.g,Eh,{email:a,password:b}))}).then(function(a){return a.user})};
h.signInWithCredential=function(a){return this.signInAndRetrieveDataWithCredential(a).then(function(a){return a.user})};h.signInAndRetrieveDataWithCredential=function(a){var b=this;return this.ya.then(function(){return Kk(b,a.Nb(b.g))})};h.signInAnonymously=function(){var a=this;return this.ya.then(function(){var b=U(a);return b&&b.isAnonymous?b:Kk(a,a.g.signInAnonymously()).then(function(b){b=b.user;ak(b,"isAnonymous",!0);return a.nb(b)}).then(function(){return U(a)})})};h.j=function(){return this.app};
var U=function(a){return a.currentUser};T.prototype.getUid=function(){return U(this)&&U(this).uid||null};var Mk=function(a){return U(a)&&U(a)._lat||null};h=T.prototype;h.Sa=function(){if(this.Dc){for(var a=0;a<this.Ja.length;a++)if(this.Ja[a])this.Ja[a](Mk(this));if(this.kc!==this.getUid()&&this.Eb.length)for(this.kc=this.getUid(),a=0;a<this.Eb.length;a++)if(this.Eb[a])this.Eb[a](Mk(this))}};h.hf=function(a){this.addAuthTokenListener(a);this.Na++;0<this.Na&&U(this)&&Qj(U(this))};
h.gg=function(a){var b=this;x(this.Ja,function(c){c==a&&b.Na--});0>this.Na&&(this.Na=0);0==this.Na&&U(this)&&Rj(U(this));this.removeAuthTokenListener(a)};h.addAuthTokenListener=function(a){var b=this;this.Ja.push(a);this.c(this.ya.then(function(){b.Da||Wa(b.Ja,a)&&a(Mk(b))}))};h.removeAuthTokenListener=function(a){Za(this.Ja,function(b){return b==a})};var Lk=function(a,b){a.Eb.push(b);a.c(a.ya.then(function(){!a.Da&&Wa(a.Eb,b)&&a.kc!==a.getUid()&&(a.kc=a.getUid(),b(Mk(a)))}))};h=T.prototype;
h["delete"]=function(){this.Da=!0;for(var a=0;a<this.K.length;a++)this.K[a].cancel("app-deleted");this.K=[];this.na&&(a=this.na,a.h.removeListener(sk("local"),a.i,this.sd));this.v&&this.v.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.K.push(a);Ed(a,function(){Ya(b.K,a)});return a};h.fetchProvidersForEmail=function(a){return this.c(ih(this.g,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
h.confirmPasswordReset=function(a,b){return this.c(this.g.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.g.checkActionCode(a).then(function(a){return new Hi(a)}))};h.applyActionCode=function(a){return this.c(this.g.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a,b){var c=this;return this.c(D().then(function(){return"undefined"===typeof b||jb(b)?{}:Ei(new Di(b))}).then(function(b){return c.g.sendPasswordResetEmail(a,b)}).then(function(){}))};
h.signInWithPhoneNumber=function(a,b){return this.c(Gi(this,a,b,r(this.signInAndRetrieveDataWithCredential,this)))};var Ok=function(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,g=0;g<b.length;g++)if(b[g].optional)f=!0;else{if(f)throw new O("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].T(c[e])&&!f){b=b[e];if(0>e||e>=Nk.length)throw new O("internal-error",
"Argument validator received an unsupported number of arguments.");c=Nk[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.S+".";break a}d=null}}if(d)throw new O("argument-error",a+" failed: "+d);},Nk="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),V=function(a,b){return{name:a||"",S:"a valid string",optional:!!b,T:m}},Pk=function(){return{name:"opt_forceRefresh",S:"a boolean",optional:!0,T:ca}},W=function(a,b){return{name:a||"",S:"a valid object",optional:!!b,
T:q}},Qk=function(a,b){return{name:a||"",S:"a function",optional:!!b,T:p}},Rk=function(a,b){return{name:a||"",S:"null",optional:!!b,T:ha}},Sk=function(){return{name:"",S:"an HTML element",optional:!1,T:function(a){return!!(a&&a instanceof Element)}}},Tk=function(){return{name:"auth",S:"an instance of Firebase Auth",optional:!0,T:function(a){return!!(a&&a instanceof T)}}},Uk=function(){return{name:"app",S:"an instance of Firebase App",optional:!0,T:function(a){return!!(a&&a instanceof firebase.app.App)}}},
Vk=function(a){return{name:a?a+"Credential":"credential",S:a?"a valid "+a+" credential":"a valid credential",optional:!1,T:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.Nb||!c)}}},Wk=function(){return{name:"authProvider",S:"a valid Auth provider",optional:!1,T:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},Xk=function(){return{name:"applicationVerifier",S:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,T:function(a){return!!(a&&
m(a.type)&&p(a.verify))}}},X=function(a,b,c,d){return{name:c||"",S:a.S+" or "+b.S,optional:!!d,T:function(c){return a.T(c)||b.T(c)}}};var Y=function(a,b){for(var c in b){var d=b[c].name;a[d]=Yk(d,a[c],b[c].a)}},Z=function(a,b,c,d){a[b]=Yk(b,c,d)},Yk=function(a,b,c){if(!c)return b;var d=Zk(a);a=function(){var a=Array.prototype.slice.call(arguments);Ok(d,c,a);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=b.prototype[e];return a},Zk=function(a){a=a.split(".");return a[a.length-1]};Y(T.prototype,{applyActionCode:{name:"applyActionCode",a:[V("code")]},checkActionCode:{name:"checkActionCode",a:[V("code")]},confirmPasswordReset:{name:"confirmPasswordReset",a:[V("code"),V("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",a:[V("email"),V("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",a:[V("email")]},getRedirectResult:{name:"getRedirectResult",a:[]},onAuthStateChanged:{name:"onAuthStateChanged",a:[X(W(),Qk(),"nextOrObserver"),
Qk("opt_error",!0),Qk("opt_completed",!0)]},onIdTokenChanged:{name:"onIdTokenChanged",a:[X(W(),Qk(),"nextOrObserver"),Qk("opt_error",!0),Qk("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",a:[V("email"),X(W("opt_actionCodeSettings",!0),Rk(null,!0),"opt_actionCodeSettings",!0)]},setPersistence:{name:"setPersistence",a:[V("persistence")]},signInAndRetrieveDataWithCredential:{name:"signInAndRetrieveDataWithCredential",a:[Vk()]},signInAnonymously:{name:"signInAnonymously",a:[]},
signInWithCredential:{name:"signInWithCredential",a:[Vk()]},signInWithCustomToken:{name:"signInWithCustomToken",a:[V("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",a:[V("email"),V("password")]},signInWithPhoneNumber:{name:"signInWithPhoneNumber",a:[V("phoneNumber"),Xk()]},signInWithPopup:{name:"signInWithPopup",a:[Wk()]},signInWithRedirect:{name:"signInWithRedirect",a:[Wk()]},signOut:{name:"signOut",a:[]},toJSON:{name:"toJSON",a:[V(null,!0)]},zg:{name:"useDeviceLanguage",
a:[]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",a:[V("code")]}});(function(a,b){for(var c in b){var d=b[c].name;if(d!==c){var e=b[c].kf;Object.defineProperty(a,d,{get:function(){return this[c]},set:function(a){Ok(d,[e],[a],!0);this[c]=a},enumerable:!0})}}})(T.prototype,{lc:{name:"languageCode",kf:X(V(),Rk(),"languageCode")}});T.Persistence=Ri;T.Persistence.LOCAL="local";T.Persistence.SESSION="session";T.Persistence.NONE="none";
Y(S.prototype,{"delete":{name:"delete",a:[]},getIdToken:{name:"getIdToken",a:[Pk()]},getToken:{name:"getToken",a:[Pk()]},linkAndRetrieveDataWithCredential:{name:"linkAndRetrieveDataWithCredential",a:[Vk()]},linkWithCredential:{name:"linkWithCredential",a:[Vk()]},linkWithPhoneNumber:{name:"linkWithPhoneNumber",a:[V("phoneNumber"),Xk()]},linkWithPopup:{name:"linkWithPopup",a:[Wk()]},linkWithRedirect:{name:"linkWithRedirect",a:[Wk()]},reauthenticateAndRetrieveDataWithCredential:{name:"reauthenticateAndRetrieveDataWithCredential",
a:[Vk()]},reauthenticateWithCredential:{name:"reauthenticateWithCredential",a:[Vk()]},reauthenticateWithPhoneNumber:{name:"reauthenticateWithPhoneNumber",a:[V("phoneNumber"),Xk()]},reauthenticateWithPopup:{name:"reauthenticateWithPopup",a:[Wk()]},reauthenticateWithRedirect:{name:"reauthenticateWithRedirect",a:[Wk()]},reload:{name:"reload",a:[]},sendEmailVerification:{name:"sendEmailVerification",a:[X(W("opt_actionCodeSettings",!0),Rk(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",a:[V(null,
!0)]},unlink:{name:"unlink",a:[V("provider")]},updateEmail:{name:"updateEmail",a:[V("email")]},updatePassword:{name:"updatePassword",a:[V("password")]},updatePhoneNumber:{name:"updatePhoneNumber",a:[Vk("phone")]},updateProfile:{name:"updateProfile",a:[W("profile")]}});Y(C.prototype,{f:{name:"catch"},then:{name:"then"}});Y(Fi.prototype,{confirm:{name:"confirm",a:[V("verificationCode")]}});Z(Gg,"credential",function(a,b){return new Dg(a,b)},[V("email"),V("password")]);
Y(vg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(vg,"credential",wg,[X(V(),W(),"token")]);Y(xg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(xg,"credential",yg,[X(V(),W(),"token")]);Y(zg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});
Z(zg,"credential",Ag,[X(V(),X(W(),Rk()),"idToken"),X(V(),Rk(),"accessToken",!0)]);Y(Bg.prototype,{setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(Bg,"credential",Cg,[X(V(),W(),"token"),V("secret",!0)]);Y(P.prototype,{addScope:{name:"addScope",a:[V("scope")]},credential:{name:"credential",a:[X(V(),Rk(),"idToken",!0),X(V(),Rk(),"accessToken",!0)]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});
Z(Lg,"credential",Ng,[V("verificationId"),V("verificationCode")]);Y(Lg.prototype,{verifyPhoneNumber:{name:"verifyPhoneNumber",a:[V("phoneNumber"),Xk()]}});Y(O.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(Qg.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(mg.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(ii.prototype,{clear:{name:"clear",a:[]},render:{name:"render",a:[]},verify:{name:"verify",a:[]}});
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:T,Error:O};Z(a,"EmailAuthProvider",Gg,[]);Z(a,"FacebookAuthProvider",vg,[]);Z(a,"GithubAuthProvider",xg,[]);Z(a,"GoogleAuthProvider",zg,[]);Z(a,"TwitterAuthProvider",Bg,[]);Z(a,"OAuthProvider",P,[V("providerId")]);Z(a,"PhoneAuthProvider",Lg,[Tk()]);Z(a,"RecaptchaVerifier",ii,[X(V(),Sk(),"recaptchaContainer"),W("recaptchaParameters",!0),Uk()]);firebase.INTERNAL.registerService("auth",function(a,
c){a=new T(a);c({INTERNAL:{getUid:r(a.getUid,a),getToken:r(a.Cf,a),addAuthTokenListener:r(a.hf,a),removeAuthTokenListener:r(a.gg,a)}});return a},a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:S})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerStorage = registerStorage;

var _string = __webpack_require__(416);

var _taskenums = __webpack_require__(421);

var _xhriopool = __webpack_require__(435);

var _reference = __webpack_require__(423);

var _service = __webpack_require__(444);

var _app = __webpack_require__(41);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Type constant for Firebase Storage.
 */
var STORAGE_TYPE = 'storage'; /**
                              * Copyright 2017 Google Inc.
                              *
                              * Licensed under the Apache License, Version 2.0 (the "License");
                              * you may not use this file except in compliance with the License.
                              * You may obtain a copy of the License at
                              *
                              *   http://www.apache.org/licenses/LICENSE-2.0
                              *
                              * Unless required by applicable law or agreed to in writing, software
                              * distributed under the License is distributed on an "AS IS" BASIS,
                              * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                              * See the License for the specific language governing permissions and
                              * limitations under the License.
                              */

function factory(app, unused, opt_url) {
    return new _service.Service(app, new _xhriopool.XhrIoPool(), opt_url);
}
function registerStorage(instance) {
    var namespaceExports = {
        // no-inline
        TaskState: _taskenums.TaskState,
        TaskEvent: _taskenums.TaskEvent,
        StringFormat: _string.StringFormat,
        Storage: _service.Service,
        Reference: _reference.Reference
    };
    instance.INTERNAL.registerService(STORAGE_TYPE, factory, namespaceExports, undefined,
    // Allow multiple storage instances per app.
    true);
}
registerStorage(_app2.default);
//# sourceMappingURL=storage.js.map


/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.XhrIoPool = undefined;

var _xhrio_network = __webpack_require__(436);

/**
 * Factory-like class for creating XhrIo instances.
 */
var XhrIoPool = function () {
    function XhrIoPool() {}
    XhrIoPool.prototype.createXhrIo = function () {
        return new _xhrio_network.NetworkXhrIo();
    };
    return XhrIoPool;
}(); /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
exports.XhrIoPool = XhrIoPool;
//# sourceMappingURL=xhriopool.js.map


/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NetworkXhrIo = undefined;

var _error = __webpack_require__(410);

var errorsExports = _interopRequireWildcard(_error);

var _object = __webpack_require__(412);

var object = _interopRequireWildcard(_object);

var _promise_external = __webpack_require__(411);

var promiseimpl = _interopRequireWildcard(_promise_external);

var _type = __webpack_require__(409);

var type = _interopRequireWildcard(_type);

var _xhrio = __webpack_require__(422);

var XhrIoExports = _interopRequireWildcard(_xhrio);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */
var NetworkXhrIo = function () {
    function NetworkXhrIo() {
        var _this = this;
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = XhrIoExports.ErrorCode.NO_ERROR;
        this.sendPromise_ = promiseimpl.make(function (resolve, reject) {
            _this.xhr_.addEventListener('abort', function (event) {
                _this.errorCode_ = XhrIoExports.ErrorCode.ABORT;
                resolve(_this);
            });
            _this.xhr_.addEventListener('error', function (event) {
                _this.errorCode_ = XhrIoExports.ErrorCode.NETWORK_ERROR;
                resolve(_this);
            });
            _this.xhr_.addEventListener('load', function (event) {
                resolve(_this);
            });
        });
    }
    /**
     * @override
     */
    NetworkXhrIo.prototype.send = function (url, method, opt_body, opt_headers) {
        var _this = this;
        if (this.sent_) {
            throw errorsExports.internalError('cannot .send() more than once');
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (type.isDef(opt_headers)) {
            var headers = opt_headers;
            object.forEach(headers, function (key, val) {
                _this.xhr_.setRequestHeader(key, val.toString());
            });
        }
        if (type.isDef(opt_body)) {
            this.xhr_.send(opt_body);
        } else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
            throw errorsExports.internalError('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
            throw errorsExports.internalError('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        } catch (e) {
            return -1;
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
            throw errorsExports.internalError('cannot .getResponseText() before sending');
        }
        return this.xhr_.responseText;
    };
    /**
     * Aborts the request.
     * @override
     */
    NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (type.isDef(this.xhr_.upload)) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (type.isDef(this.xhr_.upload)) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    };
    return NetworkXhrIo;
}(); /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
exports.NetworkXhrIo = NetworkXhrIo;
//# sourceMappingURL=xhrio_network.js.map


/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jsonObjectOrNull = jsonObjectOrNull;

var _type = __webpack_require__(409);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    var obj;
    try {
        obj = JSON.parse(s);
    } catch (e) {
        return null;
    }
    if (type.isNonArrayObject(obj)) {
        return obj;
    } else {
        return null;
    }
} /**
  * Copyright 2017 Google Inc.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
//# sourceMappingURL=json.js.map


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlob = getBlob;
exports.sliceBlob = sliceBlob;

var _type = __webpack_require__(409);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    } else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    } else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param var_args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob() {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    var BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();
        for (var i = 0; i < var_args.length; i++) {
            bb.append(var_args[i]);
        }
        return bb.getBlob();
    } else {
        if (type.isNativeBlobDefined()) {
            return new Blob(var_args);
        } else {
            throw Error("This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    } else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    } else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}
//# sourceMappingURL=fs.js.map


/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
var RequestInfo = function () {
    function RequestInfo(url, method,
    /**
       * Returns the value with which to resolve the request's promise. Only called
       * if the request is successful. Throw from this function to reject the
       * returned Request's promise with the thrown error.
       * Note: The XhrIo passed to this function may be reused after this callback
       * returns. Do not keep a reference to it in any way.
       */
    handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
    return RequestInfo;
}();
exports.RequestInfo = RequestInfo;
//# sourceMappingURL=requestinfo.js.map


/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UploadTask = undefined;

var _taskenums = __webpack_require__(421);

var fbsTaskEnums = _interopRequireWildcard(_taskenums);

var _observer = __webpack_require__(441);

var _tasksnapshot = __webpack_require__(442);

var _args = __webpack_require__(417);

var fbsArgs = _interopRequireWildcard(_args);

var _array = __webpack_require__(420);

var fbsArray = _interopRequireWildcard(_array);

var _async = __webpack_require__(443);

var _error = __webpack_require__(410);

var errors = _interopRequireWildcard(_error);

var _promise_external = __webpack_require__(411);

var fbsPromiseimpl = _interopRequireWildcard(_promise_external);

var _requests = __webpack_require__(426);

var fbsRequests = _interopRequireWildcard(_requests);

var _type = __webpack_require__(409);

var typeUtils = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Defines types for interacting with blob transfer tasks.
 */
var UploadTask = function () {
    /**
     * @param ref The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob The blob to upload.
     */
    function UploadTask(ref, authWrapper, location, mappings, blob, metadata) {
        if (metadata === void 0) {
            metadata = null;
        }
        var _this = this;
        this.transferred_ = 0;
        this.needToFetchStatus_ = false;
        this.needToFetchMetadata_ = false;
        this.observers_ = [];
        this.error_ = null;
        this.uploadUrl_ = null;
        this.request_ = null;
        this.chunkMultiplier_ = 1;
        this.resolve_ = null;
        this.reject_ = null;
        this.ref_ = ref;
        this.authWrapper_ = authWrapper;
        this.location_ = location;
        this.blob_ = blob;
        this.metadata_ = metadata;
        this.mappings_ = mappings;
        this.resumable_ = this.shouldDoResumable_(this.blob_);
        this.state_ = _taskenums.InternalTaskState.RUNNING;
        this.errorHandler_ = function (error) {
            _this.request_ = null;
            _this.chunkMultiplier_ = 1;
            if (error.codeEquals(errors.Code.CANCELED)) {
                _this.needToFetchStatus_ = true;
                _this.completeTransitions_();
            } else {
                _this.error_ = error;
                _this.transition_(_taskenums.InternalTaskState.ERROR);
            }
        };
        this.metadataErrorHandler_ = function (error) {
            _this.request_ = null;
            if (error.codeEquals(errors.Code.CANCELED)) {
                _this.completeTransitions_();
            } else {
                _this.error_ = error;
                _this.transition_(_taskenums.InternalTaskState.ERROR);
            }
        };
        this.promise_ = fbsPromiseimpl.make(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this.promise_.then(null, function () {});
    }
    UploadTask.prototype.makeProgressCallback_ = function () {
        var _this = this;
        var sizeBefore = this.transferred_;
        return function (loaded, total) {
            _this.updateProgress_(sizeBefore + loaded);
        };
    };
    UploadTask.prototype.shouldDoResumable_ = function (blob) {
        return blob.size() > 256 * 1024;
    };
    UploadTask.prototype.start_ = function () {
        if (this.state_ !== _taskenums.InternalTaskState.RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this.request_ !== null) {
            return;
        }
        if (this.resumable_) {
            if (this.uploadUrl_ === null) {
                this.createResumable_();
            } else {
                if (this.needToFetchStatus_) {
                    this.fetchStatus_();
                } else {
                    if (this.needToFetchMetadata_) {
                        // Happens if we miss the metadata on upload completion.
                        this.fetchMetadata_();
                    } else {
                        this.continueUpload_();
                    }
                }
            }
        } else {
            this.oneShotUpload_();
        }
    };
    UploadTask.prototype.resolveToken_ = function (callback) {
        var _this = this;
        this.authWrapper_.getAuthToken().then(function (authToken) {
            switch (_this.state_) {
                case _taskenums.InternalTaskState.RUNNING:
                    callback(authToken);
                    break;
                case _taskenums.InternalTaskState.CANCELING:
                    _this.transition_(_taskenums.InternalTaskState.CANCELED);
                    break;
                case _taskenums.InternalTaskState.PAUSING:
                    _this.transition_(_taskenums.InternalTaskState.PAUSED);
                    break;
                default:
            }
        });
    };
    // TODO(andysoto): assert false
    UploadTask.prototype.createResumable_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = fbsRequests.createResumableUpload(_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var createRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = createRequest;
            createRequest.getPromise().then(function (url) {
                _this.request_ = null;
                _this.uploadUrl_ = url;
                _this.needToFetchStatus_ = false;
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.fetchStatus_ = function () {
        var _this = this;
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo = fbsRequests.getResumableUploadStatus(_this.authWrapper_, _this.location_, url, _this.blob_);
            var statusRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = statusRequest;
            statusRequest.getPromise().then(function (status) {
                status = status;
                _this.request_ = null;
                _this.updateProgress_(status.current);
                _this.needToFetchStatus_ = false;
                if (status.finalized) {
                    _this.needToFetchMetadata_ = true;
                }
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.continueUpload_ = function () {
        var _this = this;
        var chunkSize = fbsRequests.resumableUploadChunkSize * this.chunkMultiplier_;
        var status = new fbsRequests.ResumableUploadStatus(this.transferred_, this.blob_.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo;
            try {
                requestInfo = fbsRequests.continueResumableUpload(_this.location_, _this.authWrapper_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
            } catch (e) {
                _this.error_ = e;
                _this.transition_(_taskenums.InternalTaskState.ERROR);
                return;
            }
            var uploadRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = uploadRequest;
            uploadRequest.getPromise().then(function (newStatus) {
                _this.increaseMultiplier_();
                _this.request_ = null;
                _this.updateProgress_(newStatus.current);
                if (newStatus.finalized) {
                    _this.metadata_ = newStatus.metadata;
                    _this.transition_(_taskenums.InternalTaskState.SUCCESS);
                } else {
                    _this.completeTransitions_();
                }
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.increaseMultiplier_ = function () {
        var currentSize = fbsRequests.resumableUploadChunkSize * this.chunkMultiplier_;
        // Max chunk size is 32M.
        if (currentSize < 32 * 1024 * 1024) {
            this.chunkMultiplier_ *= 2;
        }
    };
    UploadTask.prototype.fetchMetadata_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = fbsRequests.getMetadata(_this.authWrapper_, _this.location_, _this.mappings_);
            var metadataRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.transition_(_taskenums.InternalTaskState.SUCCESS);
            }, _this.metadataErrorHandler_);
        });
    };
    UploadTask.prototype.oneShotUpload_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = fbsRequests.multipartUpload(_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var multipartRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.updateProgress_(_this.blob_.size());
                _this.transition_(_taskenums.InternalTaskState.SUCCESS);
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.updateProgress_ = function (transferred) {
        var old = this.transferred_;
        this.transferred_ = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this.transferred_ !== old) {
            this.notifyObservers_();
        }
    };
    UploadTask.prototype.transition_ = function (state) {
        if (this.state_ === state) {
            return;
        }
        switch (state) {
            case _taskenums.InternalTaskState.CANCELING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case _taskenums.InternalTaskState.PAUSING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case _taskenums.InternalTaskState.RUNNING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                var wasPaused = this.state_ === _taskenums.InternalTaskState.PAUSED;
                this.state_ = state;
                if (wasPaused) {
                    this.notifyObservers_();
                    this.start_();
                }
                break;
            case _taskenums.InternalTaskState.PAUSED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case _taskenums.InternalTaskState.CANCELED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.error_ = errors.canceled();
                this.state_ = state;
                this.notifyObservers_();
                break;
            case _taskenums.InternalTaskState.ERROR:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case _taskenums.InternalTaskState.SUCCESS:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
        }
    };
    UploadTask.prototype.completeTransitions_ = function () {
        switch (this.state_) {
            case _taskenums.InternalTaskState.PAUSING:
                this.transition_(_taskenums.InternalTaskState.PAUSED);
                break;
            case _taskenums.InternalTaskState.CANCELING:
                this.transition_(_taskenums.InternalTaskState.CANCELED);
                break;
            case _taskenums.InternalTaskState.RUNNING:
                this.start_();
                break;
            default:
                // TODO(andysoto): assert(false);
                break;
        }
    };
    Object.defineProperty(UploadTask.prototype, "snapshot", {
        get: function get() {
            var externalState = fbsTaskEnums.taskStateFromInternalTaskState(this.state_);
            return new _tasksnapshot.UploadTaskSnapshot(this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a callback for an event.
     * @param type The type of event to listen for.
     */
    UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        if (nextOrObserver === void 0) {
            nextOrObserver = undefined;
        }
        if (error === void 0) {
            error = undefined;
        }
        if (completed === void 0) {
            completed = undefined;
        }
        function typeValidator(_p) {
            if (type !== _taskenums.TaskEvent.STATE_CHANGED) {
                throw "Expected one of the event types: [" + _taskenums.TaskEvent.STATE_CHANGED + "].";
            }
        }
        var nextOrObserverMessage = 'Expected a function or an Object with one of ' + '`next`, `error`, `complete` properties.';
        var nextValidator = fbsArgs.nullFunctionSpec(true).validator;
        var observerValidator = fbsArgs.looseObjectSpec(null, true).validator;
        function nextOrObserverValidator(p) {
            try {
                nextValidator(p);
                return;
            } catch (e) {}
            try {
                observerValidator(p);
                var anyDefined = typeUtils.isJustDef(p['next']) || typeUtils.isJustDef(p['error']) || typeUtils.isJustDef(p['complete']);
                if (!anyDefined) {
                    throw '';
                }
                return;
            } catch (e) {
                throw nextOrObserverMessage;
            }
        }
        var specs = [fbsArgs.stringSpec(typeValidator), fbsArgs.looseObjectSpec(nextOrObserverValidator, true), fbsArgs.nullFunctionSpec(true), fbsArgs.nullFunctionSpec(true)];
        fbsArgs.validate('on', specs, arguments);
        var self = this;
        function makeBinder(specs) {
            function binder(nextOrObserver, error, opt_complete) {
                if (specs !== null) {
                    fbsArgs.validate('on', specs, arguments);
                }
                var observer = new _observer.Observer(nextOrObserver, error, completed);
                self.addObserver_(observer);
                return function () {
                    self.removeObserver_(observer);
                };
            }
            return binder;
        }
        function binderNextOrObserverValidator(p) {
            if (p === null) {
                throw nextOrObserverMessage;
            }
            nextOrObserverValidator(p);
        }
        var binderSpecs = [fbsArgs.looseObjectSpec(binderNextOrObserverValidator), fbsArgs.nullFunctionSpec(true), fbsArgs.nullFunctionSpec(true)];
        var typeOnly = !(typeUtils.isJustDef(nextOrObserver) || typeUtils.isJustDef(error) || typeUtils.isJustDef(completed));
        if (typeOnly) {
            return makeBinder(binderSpecs);
        } else {
            return makeBinder(null)(nextOrObserver, error, completed);
        }
    };
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
     * @param onRejected The rejection callback.
     */
    UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this.promise_.then(onFulfilled, onRejected);
    };
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    UploadTask.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
    };
    /**
     * Adds the given observer.
     */
    UploadTask.prototype.addObserver_ = function (observer) {
        this.observers_.push(observer);
        this.notifyObserver_(observer);
    };
    /**
     * Removes the given observer.
     */
    UploadTask.prototype.removeObserver_ = function (observer) {
        fbsArray.remove(this.observers_, observer);
    };
    UploadTask.prototype.notifyObservers_ = function () {
        var _this = this;
        this.finishPromise_();
        var observers = fbsArray.clone(this.observers_);
        observers.forEach(function (observer) {
            _this.notifyObserver_(observer);
        });
    };
    UploadTask.prototype.finishPromise_ = function () {
        if (this.resolve_ !== null) {
            var triggered = true;
            switch (fbsTaskEnums.taskStateFromInternalTaskState(this.state_)) {
                case _taskenums.TaskState.SUCCESS:
                    (0, _async.async)(this.resolve_.bind(null, this.snapshot))();
                    break;
                case _taskenums.TaskState.CANCELED:
                case _taskenums.TaskState.ERROR:
                    var toCall = this.reject_;
                    (0, _async.async)(toCall.bind(null, this.error_))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this.resolve_ = null;
                this.reject_ = null;
            }
        }
    };
    UploadTask.prototype.notifyObserver_ = function (observer) {
        var externalState = fbsTaskEnums.taskStateFromInternalTaskState(this.state_);
        switch (externalState) {
            case _taskenums.TaskState.RUNNING:
            case _taskenums.TaskState.PAUSED:
                if (observer.next !== null) {
                    (0, _async.async)(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case _taskenums.TaskState.SUCCESS:
                if (observer.complete !== null) {
                    (0, _async.async)(observer.complete.bind(observer))();
                }
                break;
            case _taskenums.TaskState.CANCELED:
            case _taskenums.TaskState.ERROR:
                if (observer.error !== null) {
                    (0, _async.async)(observer.error.bind(observer, this.error_))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error !== null) {
                    (0, _async.async)(observer.error.bind(observer, this.error_))();
                }
        }
    };
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.resume = function () {
        fbsArgs.validate('resume', [], arguments);
        var valid = this.state_ === _taskenums.InternalTaskState.PAUSED || this.state_ === _taskenums.InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(_taskenums.InternalTaskState.RUNNING);
        }
        return valid;
    };
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.pause = function () {
        fbsArgs.validate('pause', [], arguments);
        var valid = this.state_ === _taskenums.InternalTaskState.RUNNING;
        if (valid) {
            this.transition_(_taskenums.InternalTaskState.PAUSING);
        }
        return valid;
    };
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.cancel = function () {
        fbsArgs.validate('cancel', [], arguments);
        var valid = this.state_ === _taskenums.InternalTaskState.RUNNING || this.state_ === _taskenums.InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(_taskenums.InternalTaskState.CANCELING);
        }
        return valid;
    };
    return UploadTask;
}();
exports.UploadTask = UploadTask;
//# sourceMappingURL=task.js.map


/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Observer = undefined;

var _type = __webpack_require__(409);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @struct
 */
var Observer = function () {
    function Observer(nextOrObserver, opt_error, opt_complete) {
        var asFunctions = type.isFunction(nextOrObserver) || type.isDef(opt_error) || type.isDef(opt_complete);
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = opt_error || null;
            this.complete = opt_complete || null;
        } else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
        }
    }
    return Observer;
}(); /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
exports.Observer = Observer;
//# sourceMappingURL=observer.js.map


/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
var UploadTaskSnapshot = function () {
    function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
    }
    Object.defineProperty(UploadTaskSnapshot.prototype, "downloadURL", {
        get: function get() {
            if (this.metadata !== null) {
                var urls = this.metadata['downloadURLs'];
                if (urls != null && urls[0] != null) {
                    return urls[0];
                } else {
                    return null;
                }
            } else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return UploadTaskSnapshot;
}();
exports.UploadTaskSnapshot = UploadTaskSnapshot;
//# sourceMappingURL=tasksnapshot.js.map


/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.async = async;

var _promise_external = __webpack_require__(411);

var promiseimpl = _interopRequireWildcard(_promise_external);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
function async(f) {
    return function () {
        var argsToForward = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
        }
        promiseimpl.resolve(true).then(function () {
            f.apply(null, argsToForward);
        });
    };
} /**
  * Copyright 2017 Google Inc.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
/**
 * @fileoverview Method for invoking a callback asynchronously.
 */
//# sourceMappingURL=async.js.map


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ServiceInternals = exports.Service = undefined;

var _args = __webpack_require__(417);

var args = _interopRequireWildcard(_args);

var _authwrapper = __webpack_require__(445);

var _location = __webpack_require__(414);

var _promise_external = __webpack_require__(411);

var fbsPromiseImpl = _interopRequireWildcard(_promise_external);

var _request = __webpack_require__(448);

var RequestExports = _interopRequireWildcard(_request);

var _reference = __webpack_require__(423);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 *
 * @struct
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Service = function () {
    function Service(app, pool, url) {
        this.bucket_ = null;
        function maker(authWrapper, loc) {
            return new _reference.Reference(authWrapper, loc);
        }
        this.authWrapper_ = new _authwrapper.AuthWrapper(app, maker, RequestExports.makeRequest, this, pool);
        this.app_ = app;
        if (url != null) {
            this.bucket_ = _location.Location.makeFromBucketSpec(url);
        } else {
            var authWrapperBucket = this.authWrapper_.bucket();
            if (authWrapperBucket != null) {
                this.bucket_ = new _location.Location(authWrapperBucket, '');
            }
        }
        this.internals_ = new ServiceInternals(this);
    }
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    Service.prototype.ref = function (path) {
        function validator(path) {
            if (/^[A-Za-z]+:\/\//.test(path)) {
                throw 'Expected child path but got a URL, use refFromURL instead.';
            }
        }
        args.validate('ref', [args.stringSpec(validator, true)], arguments);
        if (this.bucket_ == null) {
            throw new Error('No Storage Bucket defined in Firebase Options.');
        }
        var ref = new _reference.Reference(this.authWrapper_, this.bucket_);
        if (path != null) {
            return ref.child(path);
        } else {
            return ref;
        }
    };
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    Service.prototype.refFromURL = function (url) {
        function validator(p) {
            if (!/^[A-Za-z]+:\/\//.test(p)) {
                throw 'Expected full URL but got a child path, use ref instead.';
            }
            try {
                _location.Location.makeFromUrl(p);
            } catch (e) {
                throw 'Expected valid full URL but got an invalid one.';
            }
        }
        args.validate('refFromURL', [args.stringSpec(validator, false)], arguments);
        return new _reference.Reference(this.authWrapper_, url);
    };
    Object.defineProperty(Service.prototype, "maxUploadRetryTime", {
        get: function get() {
            return this.authWrapper_.maxUploadRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxUploadRetryTime = function (time) {
        args.validate('setMaxUploadRetryTime', [args.nonNegativeNumberSpec()], arguments);
        this.authWrapper_.setMaxUploadRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "maxOperationRetryTime", {
        get: function get() {
            return this.authWrapper_.maxOperationRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxOperationRetryTime = function (time) {
        args.validate('setMaxOperationRetryTime', [args.nonNegativeNumberSpec()], arguments);
        this.authWrapper_.setMaxOperationRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "app", {
        get: function get() {
            return this.app_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "INTERNAL", {
        get: function get() {
            return this.internals_;
        },
        enumerable: true,
        configurable: true
    });
    return Service;
}();
exports.Service = Service;
/**
 * @struct
 */

var ServiceInternals = function () {
    function ServiceInternals(service) {
        this.service_ = service;
    }
    /**
     * Called when the associated app is deleted.
     * @see {!fbs.AuthWrapper.prototype.deleteApp}
     */
    ServiceInternals.prototype.delete = function () {
        this.service_.authWrapper_.deleteApp();
        return fbsPromiseImpl.resolve(undefined);
    };
    return ServiceInternals;
}();
exports.ServiceInternals = ServiceInternals;
//# sourceMappingURL=service.js.map


/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthWrapper = undefined;

var _constants = __webpack_require__(413);

var constants = _interopRequireWildcard(_constants);

var _error2 = __webpack_require__(410);

var errorsExports = _interopRequireWildcard(_error2);

var _failrequest = __webpack_require__(446);

var _location = __webpack_require__(414);

var _promise_external = __webpack_require__(411);

var promiseimpl = _interopRequireWildcard(_promise_external);

var _requestmap = __webpack_require__(447);

var _type = __webpack_require__(409);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @param app If null, getAuthToken always resolves with null.
 * @param service The storage service associated with this auth wrapper.
 *     Untyped to avoid circular type dependencies.
 * @struct
 */
var AuthWrapper = function () {
    function AuthWrapper(app, maker, requestMaker, service, pool) {
        this.bucket_ = null;
        this.deleted_ = false;
        this.app_ = app;
        if (this.app_ !== null) {
            var options = this.app_.options;
            if (type.isDef(options)) {
                this.bucket_ = AuthWrapper.extractBucket_(options);
            }
        }
        this.storageRefMaker_ = maker;
        this.requestMaker_ = requestMaker;
        this.pool_ = pool;
        this.service_ = service;
        this.maxOperationRetryTime_ = constants.defaultMaxOperationRetryTime;
        this.maxUploadRetryTime_ = constants.defaultMaxUploadRetryTime;
        this.requestMap_ = new _requestmap.RequestMap();
    }
    AuthWrapper.extractBucket_ = function (config) {
        var bucketString = config[constants.configOption] || null;
        if (bucketString == null) {
            return null;
        }
        var loc = _location.Location.makeFromBucketSpec(bucketString);
        return loc.bucket;
    };
    AuthWrapper.prototype.getAuthToken = function () {
        // TODO(andysoto): remove ifDef checks after firebase-app implements stubs
        // (b/28673818).
        if (this.app_ !== null && type.isDef(this.app_.INTERNAL) && type.isDef(this.app_.INTERNAL.getToken)) {
            return this.app_.INTERNAL.getToken().then(function (response) {
                if (response !== null) {
                    return response.accessToken;
                } else {
                    return null;
                }
            }, function (_error) {
                return null;
            });
        } else {
            return promiseimpl.resolve(null);
        }
    };
    AuthWrapper.prototype.bucket = function () {
        if (this.deleted_) {
            throw errorsExports.appDeleted();
        } else {
            return this.bucket_;
        }
    };
    /**
     * The service associated with this auth wrapper. Untyped to avoid circular
     * type dependencies.
     */
    AuthWrapper.prototype.service = function () {
        return this.service_;
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this AuthWrapper
     * at the given Location.
     * @param loc The Location.
     * @return Actually a firebaseStorage.Reference, typing not allowed
     *     because of circular dependency problems.
     */
    AuthWrapper.prototype.makeStorageReference = function (loc) {
        return this.storageRefMaker_(this, loc);
    };
    AuthWrapper.prototype.makeRequest = function (requestInfo, authToken) {
        if (!this.deleted_) {
            var request = this.requestMaker_(requestInfo, authToken, this.pool_);
            this.requestMap_.addRequest(request);
            return request;
        } else {
            return new _failrequest.FailRequest(errorsExports.appDeleted());
        }
    };
    /**
     * Stop running requests and prevent more from being created.
     */
    AuthWrapper.prototype.deleteApp = function () {
        this.deleted_ = true;
        this.app_ = null;
        this.requestMap_.clear();
    };
    AuthWrapper.prototype.maxUploadRetryTime = function () {
        return this.maxUploadRetryTime_;
    };
    AuthWrapper.prototype.setMaxUploadRetryTime = function (time) {
        this.maxUploadRetryTime_ = time;
    };
    AuthWrapper.prototype.maxOperationRetryTime = function () {
        return this.maxOperationRetryTime_;
    };
    AuthWrapper.prototype.setMaxOperationRetryTime = function (time) {
        this.maxOperationRetryTime_ = time;
    };
    return AuthWrapper;
}();
exports.AuthWrapper = AuthWrapper;
//# sourceMappingURL=authwrapper.js.map


/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FailRequest = undefined;

var _promise_external = __webpack_require__(411);

var promiseimpl = _interopRequireWildcard(_promise_external);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * A request whose promise always fails.
 * @struct
 * @template T
 */
var FailRequest = function () {
    function FailRequest(error) {
        this.promise_ = promiseimpl.reject(error);
    }
    /** @inheritDoc */
    FailRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    FailRequest.prototype.cancel = function (appDelete) {
        if (appDelete === void 0) {
            appDelete = false;
        }
    };
    return FailRequest;
}();
exports.FailRequest = FailRequest;
//# sourceMappingURL=failrequest.js.map


/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RequestMap = undefined;

var _object = __webpack_require__(412);

var object = _interopRequireWildcard(_object);

var _constants = __webpack_require__(413);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @struct
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var RequestMap = function () {
    function RequestMap() {
        this.map_ = {};
        this.id_ = constants.minSafeInteger;
    }
    /**
     * Registers the given request with this map.
     * The request is unregistered when it completes.
     * @param r The request to register.
     */
    RequestMap.prototype.addRequest = function (r) {
        var id = this.id_;
        this.id_++;
        this.map_[id] = r;
        var self = this;
        function unmap() {
            delete self.map_[id];
        }
        r.getPromise().then(unmap, unmap);
    };
    /**
     * Cancels all registered requests.
     */
    RequestMap.prototype.clear = function () {
        object.forEach(this.map_, function (key, val) {
            if (val) {
                val.cancel(true);
            }
        });
        this.map_ = {};
    };
    return RequestMap;
}();
exports.RequestMap = RequestMap;
//# sourceMappingURL=requestmap.js.map


/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RequestEndStatus = undefined;
exports.addAuthHeader_ = addAuthHeader_;
exports.addVersionHeader_ = addVersionHeader_;
exports.makeRequest = makeRequest;

var _array = __webpack_require__(420);

var array = _interopRequireWildcard(_array);

var _backoff = __webpack_require__(449);

var backoff = _interopRequireWildcard(_backoff);

var _error = __webpack_require__(410);

var errorsExports = _interopRequireWildcard(_error);

var _object = __webpack_require__(412);

var object = _interopRequireWildcard(_object);

var _promise_external = __webpack_require__(411);

var promiseimpl = _interopRequireWildcard(_promise_external);

var _type = __webpack_require__(409);

var type = _interopRequireWildcard(_type);

var _url = __webpack_require__(419);

var UrlUtils = _interopRequireWildcard(_url);

var _xhrio = __webpack_require__(422);

var XhrIoExports = _interopRequireWildcard(_xhrio);

var _app = __webpack_require__(41);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @struct
 * @template T
 */
var NetworkRequest = function () {
    function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.resolve_ = null;
        this.reject_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        var self = this;
        this.promise_ = promiseimpl.make(function (resolve, reject) {
            self.resolve_ = resolve;
            self.reject_ = reject;
            self.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    NetworkRequest.prototype.start_ = function () {
        var self = this;
        function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;
            function progressListener(progressEvent) {
                var loaded = progressEvent.loaded;
                var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (self.progressCallback_ !== null) {
                    self.progressCallback_(loaded, total);
                }
            }
            if (self.progressCallback_ !== null) {
                xhr.addUploadProgressListener(progressListener);
            }
            xhr.send(self.url_, self.method_, self.body_, self.headers_).then(function (xhr) {
                if (self.progressCallback_ !== null) {
                    xhr.removeUploadProgressListener(progressListener);
                }
                self.pendingXhr_ = null;
                xhr = xhr;
                var hitServer = xhr.getErrorCode() === XhrIoExports.ErrorCode.NO_ERROR;
                var status = xhr.getStatus();
                if (!hitServer || self.isRetryStatusCode_(status)) {
                    var wasCanceled = xhr.getErrorCode() === XhrIoExports.ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                var successCode = array.contains(self.successCodes_, status);
                backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
        }
        /**
         * @param requestWentThrough True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;
            if (status.wasSuccessCode) {
                try {
                    var result = self.callback_(xhr, xhr.getResponseText());
                    if (type.isJustDef(result)) {
                        resolve(result);
                    } else {
                        resolve();
                    }
                } catch (e) {
                    reject(e);
                }
            } else {
                if (xhr !== null) {
                    var err = errorsExports.unknown();
                    err.setServerResponseProp(xhr.getResponseText());
                    if (self.errorCallback_) {
                        reject(self.errorCallback_(xhr, err));
                    } else {
                        reject(err);
                    }
                } else {
                    if (status.canceled) {
                        var err = self.appDelete_ ? errorsExports.appDeleted() : errorsExports.canceled();
                        reject(err);
                    } else {
                        var err = errorsExports.retryLimitExceeded();
                        reject(err);
                    }
                }
            }
        }
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        } else {
            this.backoffId_ = backoff.start(doTheRequest, backoffDone, this.timeout_);
        }
    };
    /** @inheritDoc */
    NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            backoff.stop(this.backoffId_);
        }
        if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
        }
    };
    NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [
        // Request Timeout: web server didn't receive full request in time.
        408,
        // Too Many Requests: you're getting rate-limited, basically.
        429];
        var isExtraRetryCode = array.contains(extraRetryCodes, status);
        var isRequestSpecificRetryCode = array.contains(this.additionalRetryCodes_, status);
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    };
    return NetworkRequest;
}();
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled Defaults to false.
 * @struct
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Defines methods used to actually send HTTP requests from
 * abstract representations.
 */
var RequestEndStatus = function () {
    function RequestEndStatus(wasSuccessCode, xhr, opt_canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!opt_canceled;
    }
    return RequestEndStatus;
}();
exports.RequestEndStatus = RequestEndStatus;
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers) {
    var number = typeof _app2.default !== 'undefined' ? _app2.default.SDK_VERSION : 'AppManager';
    headers['X-Firebase-Storage-Version'] = 'webjs/' + number;
}
/**
 * @template T
 */
function makeRequest(requestInfo, authToken, pool) {
    var queryPart = UrlUtils.makeQueryString(requestInfo.urlParams);
    var url = requestInfo.url + queryPart;
    var headers = object.clone(requestInfo.headers);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}
//# sourceMappingURL=request.js.map


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.start = start;
exports.stop = stop;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */
function start(f, callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    var waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    var timeoutId = null;
    var hitTimeout = false;
    var cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    var triggeredCallback = false;
    function triggerCallback() {
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, arguments);
        }
    }
    function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
        }, millis);
    }
    function handler(success) {
        var var_args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            var_args[_i - 1] = arguments[_i];
        }
        if (triggeredCallback) {
            return;
        }
        if (success) {
            triggerCallback.apply(null, arguments);
            return;
        }
        var mustStop = canceled() || hitTimeout;
        if (mustStop) {
            triggerCallback.apply(null, arguments);
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        var waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        } else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    var stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        if (triggeredCallback) {
            return;
        }
        if (timeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(timeoutId);
            callWithDelay(0);
        } else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    setTimeout(function () {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}
//# sourceMappingURL=backoff.js.map


/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerMessaging = registerMessaging;

var _windowController = __webpack_require__(451);

var _windowController2 = _interopRequireDefault(_windowController);

var _swController = __webpack_require__(455);

var _swController2 = _interopRequireDefault(_swController);

var _app = __webpack_require__(41);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerMessaging(instance) {
    var messagingName = 'messaging';
    var factoryMethod = function factoryMethod(app) {
        if (self && 'ServiceWorkerGlobalScope' in self) {
            return new _swController2.default(app);
        }
        // Assume we are in the window context.
        return new _windowController2.default(app);
    };
    var namespaceExports = {
        // no-inline
        Messaging: _windowController2.default
    };
    instance.INTERNAL.registerService(messagingName, factoryMethod, namespaceExports);
}
registerMessaging(_app2.default);
//# sourceMappingURL=messaging.js.map


/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _controllerInterface = __webpack_require__(427);

var _controllerInterface2 = _interopRequireDefault(_controllerInterface);

var _errors = __webpack_require__(415);

var _errors2 = _interopRequireDefault(_errors);

var _workerPageMessage = __webpack_require__(430);

var _workerPageMessage2 = _interopRequireDefault(_workerPageMessage);

var _defaultSw = __webpack_require__(454);

var _defaultSw2 = _interopRequireDefault(_defaultSw);

var _notificationPermission = __webpack_require__(429);

var _notificationPermission2 = _interopRequireDefault(_notificationPermission);

var _subscribe = __webpack_require__(279);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var WindowController = function (_super) {
    __extends(WindowController, _super);
    /**
     * A service that provides a MessagingService instance.
     * @param {!firebase.app.App} app
     */
    function WindowController(app) {
        var _this = _super.call(this, app) || this;
        /**
         * @private
         * @type {ServiceWorkerRegistration}
         */
        _this.registrationToUse_;
        /**
         * @private
         * @type {Promise}
         */
        _this.manifestCheckPromise_;
        /**
         * @private
         * @type {firebase.Observer}
         */
        _this.messageObserver_ = null;
        /**
         * @private {!firebase.Subscribe} The subscribe function to the onMessage
         * observer.
         */
        _this.onMessage_ = (0, _subscribe.createSubscribe)(function (observer) {
            _this.messageObserver_ = observer;
        });
        /**
         * @private
         * @type {firebase.Observer}
         */
        _this.tokenRefreshObserver_ = null;
        _this.onTokenRefresh_ = (0, _subscribe.createSubscribe)(function (observer) {
            _this.tokenRefreshObserver_ = observer;
        });
        _this.setupSWMessageListener_();
        return _this;
    }
    /**
     * This method returns an FCM token if it can be generated.
     * The return promise will reject if the browser doesn't support
     * FCM, if permission is denied for notifications or it's not
     * possible to generate a token.
     * @export
     * @return {Promise<string> | Promise<null>} Returns a promise the
     * resolves to an FCM token or null if permission isn't granted.
     */
    WindowController.prototype.getToken = function () {
        var _this = this;
        // Check that the required API's are available
        if (!this.isSupported_()) {
            return Promise.reject(this.errorFactory_.create(_errors2.default.codes.UNSUPPORTED_BROWSER));
        }
        return this.manifestCheck_().then(function () {
            return _super.prototype.getToken.call(_this);
        });
    };
    /**
     * The method checks that a manifest is defined and has the correct GCM
     * sender ID.
     * @private
     * @return {Promise} Returns a promise that resolves if the manifest matches
     * our required sender ID
     */
    WindowController.prototype.manifestCheck_ = function () {
        var _this = this;
        if (this.manifestCheckPromise_) {
            return this.manifestCheckPromise_;
        }
        var manifestTag = document.querySelector('link[rel="manifest"]');
        if (!manifestTag) {
            this.manifestCheckPromise_ = Promise.resolve();
        } else {
            this.manifestCheckPromise_ = fetch(manifestTag.href).then(function (response) {
                return response.json();
            }).catch(function () {
                // If the download or parsing fails allow check.
                // We only want to error if we KNOW that the gcm_sender_id is incorrect.
                return Promise.resolve();
            }).then(function (manifestContent) {
                if (!manifestContent) {
                    return;
                }
                if (!manifestContent['gcm_sender_id']) {
                    return;
                }
                if (manifestContent['gcm_sender_id'] !== '103953800507') {
                    throw _this.errorFactory_.create(_errors2.default.codes.INCORRECT_GCM_SENDER_ID);
                }
            });
        }
        return this.manifestCheckPromise_;
    };
    /**
     * Request permission if it is not currently granted
     * @export
     * @returns {Promise} Resolves if the permission was granted, otherwise
     * rejects
     */
    WindowController.prototype.requestPermission = function () {
        var _this = this;
        if (Notification.permission === _notificationPermission2.default.granted) {
            return Promise.resolve();
        }
        return new Promise(function (resolve, reject) {
            var managePermissionResult = function managePermissionResult(result) {
                if (result === _notificationPermission2.default.granted) {
                    return resolve();
                } else if (result === _notificationPermission2.default.denied) {
                    return reject(_this.errorFactory_.create(_errors2.default.codes.PERMISSION_BLOCKED));
                } else {
                    return reject(_this.errorFactory_.create(_errors2.default.codes.PERMISSION_DEFAULT));
                }
            };
            // The Notification.requestPermission API was changed to
            // return a promise so now have to handle both in case
            // browsers stop support callbacks for promised version
            var permissionPromise = Notification.requestPermission(function (result) {
                if (permissionPromise) {
                    // Let the promise manage this
                    return;
                }
                managePermissionResult(result);
            });
            if (permissionPromise) {
                // Prefer the promise version as it's the future API.
                permissionPromise.then(managePermissionResult);
            }
        });
    };
    /**
     * This method allows a developer to override the default service worker and
     * instead use a custom service worker.
     * @export
     * @param {!ServiceWorkerRegistration} registration The service worker
     * registration that should be used to receive the push messages.
     */
    WindowController.prototype.useServiceWorker = function (registration) {
        if (!(registration instanceof ServiceWorkerRegistration)) {
            throw this.errorFactory_.create(_errors2.default.codes.SW_REGISTRATION_EXPECTED);
        }
        if (typeof this.registrationToUse_ !== 'undefined') {
            throw this.errorFactory_.create(_errors2.default.codes.USE_SW_BEFORE_GET_TOKEN);
        }
        this.registrationToUse_ = registration;
    };
    /**
     * @export
     * @param {!firebase.Observer|function(*)} nextOrObserver An observer object
     * or a function triggered on message.
     * @param {function(!Error)=} optError Optional A function triggered on
     * message error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    WindowController.prototype.onMessage = function (nextOrObserver, optError, optCompleted) {
        return this.onMessage_(nextOrObserver, optError, optCompleted);
    };
    /**
     * @export
     * @param {!firebase.Observer|function()} nextOrObserver An observer object
     * or a function triggered on token refresh.
     * @param {function(!Error)=} optError Optional A function
     * triggered on token refresh error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    WindowController.prototype.onTokenRefresh = function (nextOrObserver, optError, optCompleted) {
        return this.onTokenRefresh_(nextOrObserver, optError, optCompleted);
    };
    /**
     * Given a registration, wait for the service worker it relates to
     * become activer
     * @private
     * @param  {ServiceWorkerRegistration} registration Registration to wait
     * for service worker to become active
     * @return {Promise<!ServiceWorkerRegistration>} Wait for service worker
     * registration to become active
     */
    WindowController.prototype.waitForRegistrationToActivate_ = function (registration) {
        var _this = this;
        var serviceWorker = registration.installing || registration.waiting || registration.active;
        return new Promise(function (resolve, reject) {
            if (!serviceWorker) {
                // This is a rare scenario but has occured in firefox
                reject(_this.errorFactory_.create(_errors2.default.codes.NO_SW_IN_REG));
                return;
            }
            // Because the Promise function is called on next tick there is a
            // small chance that the worker became active or redundant already.
            if (serviceWorker.state === 'activated') {
                resolve(registration);
                return;
            }
            if (serviceWorker.state === 'redundant') {
                reject(_this.errorFactory_.create(_errors2.default.codes.SW_REG_REDUNDANT));
                return;
            }
            var stateChangeListener = function stateChangeListener() {
                if (serviceWorker.state === 'activated') {
                    resolve(registration);
                } else if (serviceWorker.state === 'redundant') {
                    reject(_this.errorFactory_.create(_errors2.default.codes.SW_REG_REDUNDANT));
                } else {
                    // Return early and wait to next state change
                    return;
                }
                serviceWorker.removeEventListener('statechange', stateChangeListener);
            };
            serviceWorker.addEventListener('statechange', stateChangeListener);
        });
    };
    /**
     * This will regiater the default service worker and return the registration
     * @private
     * @return {Promise<!ServiceWorkerRegistration>} The service worker
     * registration to be used for the push service.
     */
    WindowController.prototype.getSWRegistration_ = function () {
        var _this = this;
        if (this.registrationToUse_) {
            return this.waitForRegistrationToActivate_(this.registrationToUse_);
        }
        // Make the registration null so we know useServiceWorker will not
        // use a new service worker as registrationToUse_ is no longer undefined
        this.registrationToUse_ = null;
        return navigator.serviceWorker.register(_defaultSw2.default.path, {
            scope: _defaultSw2.default.scope
        }).catch(function (err) {
            throw _this.errorFactory_.create(_errors2.default.codes.FAILED_DEFAULT_REGISTRATION, {
                browserErrorMessage: err.message
            });
        }).then(function (registration) {
            return _this.waitForRegistrationToActivate_(registration).then(function () {
                _this.registrationToUse_ = registration;
                // We update after activation due to an issue with Firefox v49 where
                // a race condition occassionally causes the service work to not
                // install
                registration.update();
                return registration;
            });
        });
    };
    /**
     * This method will set up a message listener to handle
     * events from the service worker that should trigger
     * events in the page.
     *
     * @private
     */
    WindowController.prototype.setupSWMessageListener_ = function () {
        var _this = this;
        if (!('serviceWorker' in navigator)) {
            return;
        }
        navigator.serviceWorker.addEventListener('message', function (event) {
            if (!event.data || !event.data[_workerPageMessage2.default.PARAMS.TYPE_OF_MSG]) {
                // Not a message from FCM
                return;
            }
            var workerPageMessage = event.data;
            switch (workerPageMessage[_workerPageMessage2.default.PARAMS.TYPE_OF_MSG]) {
                case _workerPageMessage2.default.TYPES_OF_MSG.PUSH_MSG_RECEIVED:
                case _workerPageMessage2.default.TYPES_OF_MSG.NOTIFICATION_CLICKED:
                    var pushMessage = workerPageMessage[_workerPageMessage2.default.PARAMS.DATA];
                    _this.messageObserver_.next(pushMessage);
                    break;
                default:
                    // Noop.
                    break;
            }
        }, false);
    };
    /**
     * Checks to see if the required API's are valid or not.
     * @private
     * @return {boolean} Returns true if the desired APIs are available.
     */
    WindowController.prototype.isSupported_ = function () {
        return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window && 'fetch' in window && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') && PushSubscription.prototype.hasOwnProperty('getKey');
    };
    return WindowController;
}(_controllerInterface2.default);
exports.default = WindowController;
module.exports = exports['default'];
//# sourceMappingURL=window-controller.js.map


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errors = __webpack_require__(278);

var _errors2 = __webpack_require__(415);

var _errors3 = _interopRequireDefault(_errors2);

var _arrayBufferToBase = __webpack_require__(453);

var _arrayBufferToBase2 = _interopRequireDefault(_arrayBufferToBase);

var _fcmDetails = __webpack_require__(428);

var _fcmDetails2 = _interopRequireDefault(_fcmDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FCM_TOKEN_DETAILS_DB = 'fcm_token_details_db';
var FCM_TOKEN_OBJ_STORE = 'fcm_token_object_Store';
var FCM_TOKEN_DETAILS_DB_VERSION = 1;
var TokenManager = function () {
    function TokenManager() {
        this.errorFactory_ = new _errors.ErrorFactory('messaging', 'Messaging', _errors3.default.map);
        this.openDbPromise_ = null;
    }
    /**
     * Get the indexedDB as a promsie.
     * @private
     * @return {Promise<IDBDatabase>} The IndexedDB database
     */
    TokenManager.prototype.openDatabase_ = function () {
        if (this.openDbPromise_) {
            return this.openDbPromise_;
        }
        this.openDbPromise_ = new Promise(function (resolve, reject) {
            var request = indexedDB.open(FCM_TOKEN_DETAILS_DB, FCM_TOKEN_DETAILS_DB_VERSION);
            request.onerror = function (event) {
                reject(event.target.error);
            };
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };
            request.onupgradeneeded = function (event) {
                var db = event.target.result;
                var objectStore = db.createObjectStore(FCM_TOKEN_OBJ_STORE, {
                    keyPath: 'swScope'
                });
                // Make sure the sender ID can be searched
                objectStore.createIndex('fcmSenderId', 'fcmSenderId', {
                    unique: false
                });
                objectStore.createIndex('fcmToken', 'fcmToken', {
                    unique: true
                });
            };
        });
        return this.openDbPromise_;
    };
    /**
     * Close the currently open database.
     * @return {Promise<?>} Returns the result of the promise chain.
     */
    TokenManager.prototype.closeDatabase = function () {
        var _this = this;
        if (this.openDbPromise_) {
            return this.openDbPromise_.then(function (db) {
                db.close();
                _this.openDbPromise_ = null;
            });
        }
        return Promise.resolve();
    };
    /**
     * Given a token, this method will look up the details in indexedDB.
     * @public
     * @param {string} fcmToken
     * @return {Promise<Object>} The details associated with that token.
     */
    TokenManager.prototype.getTokenDetailsFromToken = function (fcmToken) {
        return this.openDatabase_().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var index = objectStore.index('fcmToken');
                var request = index.get(fcmToken);
                request.onerror = function (event) {
                    reject(event.target.error);
                };
                request.onsuccess = function (event) {
                    resolve(event.target.result);
                };
            });
        });
    };
    TokenManager.prototype.getTokenDetailsFromSWScope_ = function (swScope) {
        return this.openDatabase_().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var scopeRequest = objectStore.get(swScope);
                scopeRequest.onerror = function (event) {
                    reject(event.target.error);
                };
                scopeRequest.onsuccess = function (event) {
                    resolve(event.target.result);
                };
            });
        });
    };
    TokenManager.prototype.getAllTokenDetailsForSenderId_ = function (senderId) {
        return this.openDatabase_().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var senderIdTokens = [];
                var cursorRequest = objectStore.openCursor();
                cursorRequest.onerror = function (event) {
                    reject(event.target.error);
                };
                cursorRequest.onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        if (cursor.value['fcmSenderId'] === senderId) {
                            senderIdTokens.push(cursor.value);
                        }
                        cursor.continue();
                    } else {
                        resolve(senderIdTokens);
                    }
                };
            });
        });
    };
    /**
     * Given a PushSubscription and messagingSenderId, get an FCM token.
     * @public
     * @param  {string} senderId The 'messagingSenderId' to tie the token to.
     * @param  {PushSubscription} subscription The PushSusbcription to "federate".
     * @param  {string=} pushSet If defined this will swap the subscription for
     * matching FCM token.
     * @return {Promise<!Object>} Returns the FCM token to be used in place
     * of the PushSubscription.
     */
    TokenManager.prototype.subscribeToFCM = function (senderId, subscription, pushSet) {
        var _this = this;
        var p256dh = (0, _arrayBufferToBase2.default)(subscription['getKey']('p256dh'));
        var auth = (0, _arrayBufferToBase2.default)(subscription['getKey']('auth'));
        var fcmSubscribeBody = "authorized_entity=" + senderId + "&" + ("endpoint=" + subscription.endpoint + "&") + ("encryption_key=" + p256dh + "&") + ("encryption_auth=" + auth);
        if (pushSet) {
            fcmSubscribeBody += "&pushSet=" + pushSet;
        }
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var subscribeOptions = {
            method: 'POST',
            headers: headers,
            body: fcmSubscribeBody
        };
        return fetch(_fcmDetails2.default.ENDPOINT + '/fcm/connect/subscribe', subscribeOptions).then(function (response) {
            return response.json();
        }).then(function (response) {
            var fcmTokenResponse = response;
            if (fcmTokenResponse['error']) {
                var message = fcmTokenResponse['error']['message'];
                throw _this.errorFactory_.create(_errors3.default.codes.TOKEN_SUBSCRIBE_FAILED, {
                    message: message
                });
            }
            if (!fcmTokenResponse['token']) {
                throw _this.errorFactory_.create(_errors3.default.codes.TOKEN_SUBSCRIBE_NO_TOKEN);
            }
            if (!fcmTokenResponse['pushSet']) {
                throw _this.errorFactory_.create(_errors3.default.codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);
            }
            return {
                token: fcmTokenResponse['token'],
                pushSet: fcmTokenResponse['pushSet']
            };
        });
    };
    /**
     * Checks the that fields in the PushSubscription are equivalent to the
     * details stores in the masterTokenDetails.
     * @private
     * @param  {PushSubscription} subscription The push subscription we expect
     * the master token to match.
     * @param  {Object}  masterTokenDetails The saved details we wish to compare
     * with the PushSubscription
     * @return {boolean} true if the subscription and token details are
     * equivalent.
     */
    TokenManager.prototype.isSameSubscription_ = function (subscription, masterTokenDetails) {
        // getKey() isn't defined in the PushSubscription externs file, hence
        // subscription['getKey']('<key name>').
        return subscription.endpoint === masterTokenDetails['endpoint'] && (0, _arrayBufferToBase2.default)(subscription['getKey']('auth')) === masterTokenDetails['auth'] && (0, _arrayBufferToBase2.default)(subscription['getKey']('p256dh')) === masterTokenDetails['p256dh'];
    };
    /**
     * Save the details for the fcm token for re-use at a later date.
     * @private
     * @param  {string} senderId The 'messagingSenderId' used for this project
     * @param  {ServiceWorkerRegistration} swRegistration The service worker
     * used to subscribe the user for web push
     * @param  {PushSubscription} subscription The push subscription passed to
     * FCM for the current token.
     * @param  {string} fcmToken The FCM token currently used on this
     * device.
     * @param  {string} fcmPushSet The FCM push tied to the fcm token.
     * @return {Promise<void>}
     */
    TokenManager.prototype.saveTokenDetails_ = function (senderId, swRegistration, subscription, fcmToken, fcmPushSet) {
        var details = {
            swScope: swRegistration.scope,
            endpoint: subscription.endpoint,
            auth: (0, _arrayBufferToBase2.default)(subscription['getKey']('auth')),
            p256dh: (0, _arrayBufferToBase2.default)(subscription['getKey']('p256dh')),
            fcmToken: fcmToken,
            fcmPushSet: fcmPushSet,
            fcmSenderId: senderId
        };
        return this.openDatabase_().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE], 'readwrite');
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var request = objectStore.put(details);
                request.onerror = function (event) {
                    reject(event.target.error);
                };
                request.onsuccess = function (event) {
                    resolve();
                };
            });
        });
    };
    /**
     * Returns the saved FCM Token if one is available and still valid,
     * otherwise `null` is returned.
     * @param {string} senderId This should be the sender ID associated with the
     * FCM Token being retrieved.
     * @param {ServiceWorkerRegistration} swRegistration Registration to be used
     * to subscribe the user to push.
     * @return {Promise<string> | Promise} Returns the saved FCM Token if
     * avilable and valid.
     * @export
     */
    TokenManager.prototype.getSavedToken = function (senderId, swRegistration) {
        var _this = this;
        if (!(swRegistration instanceof ServiceWorkerRegistration)) {
            return Promise.reject(this.errorFactory_.create(_errors3.default.codes.SW_REGISTRATION_EXPECTED));
        }
        if (typeof senderId !== 'string' || senderId.length === 0) {
            return Promise.reject(this.errorFactory_.create(_errors3.default.codes.BAD_SENDER_ID));
        }
        return this.getAllTokenDetailsForSenderId_(senderId).then(function (allTokenDetails) {
            if (allTokenDetails.length === 0) {
                return;
            }
            var index = allTokenDetails.findIndex(function (tokenDetails) {
                return swRegistration.scope === tokenDetails['swScope'] && senderId === tokenDetails['fcmSenderId'];
            });
            if (index === -1) {
                return;
            }
            return allTokenDetails[index];
        }).then(function (tokenDetails) {
            if (!tokenDetails) {
                return;
            }
            return swRegistration.pushManager.getSubscription().catch(function (err) {
                throw _this.errorFactory_.create(_errors3.default.codes.GET_SUBSCRIPTION_FAILED);
            }).then(function (subscription) {
                if (subscription && _this.isSameSubscription_(subscription, tokenDetails)) {
                    return tokenDetails['fcmToken'];
                }
            });
        });
    };
    /**
     * Creates a new FCM token.
     */
    TokenManager.prototype.createToken = function (senderId, swRegistration) {
        var _this = this;
        if (typeof senderId !== 'string' || senderId.length === 0) {
            return Promise.reject(this.errorFactory_.create(_errors3.default.codes.BAD_SENDER_ID));
        }
        if (!(swRegistration instanceof ServiceWorkerRegistration)) {
            return Promise.reject(this.errorFactory_.create(_errors3.default.codes.SW_REGISTRATION_EXPECTED));
        }
        // Check for existing subscription first
        var subscription;
        var fcmTokenDetails;
        return swRegistration.pushManager.getSubscription().then(function (subscription) {
            if (subscription) {
                return subscription;
            }
            return swRegistration.pushManager.subscribe(_fcmDetails2.default.SUBSCRIPTION_OPTIONS);
        }).then(function (sub) {
            subscription = sub;
            return _this.subscribeToFCM(senderId, subscription);
        }).then(function (tokenDetails) {
            fcmTokenDetails = tokenDetails;
            return _this.saveTokenDetails_(senderId, swRegistration, subscription, fcmTokenDetails['token'], fcmTokenDetails['pushSet']);
        }).then(function () {
            return fcmTokenDetails['token'];
        });
    };
    /**
     * This method deletes details of the current FCM token.
     * It's returning a promise in case we need to move to an async
     * method for deleting at a later date.
     * @param {string} token Token to be deleted
     * @return {Promise<Object>} Resolves once the FCM token details have been
     * deleted and returns the deleted details.
     */
    TokenManager.prototype.deleteToken = function (token) {
        var _this = this;
        if (typeof token !== 'string' || token.length === 0) {
            return Promise.reject(this.errorFactory_.create(_errors3.default.codes.INVALID_DELETE_TOKEN));
        }
        return this.getTokenDetailsFromToken(token).then(function (details) {
            if (!details) {
                throw _this.errorFactory_.create(_errors3.default.codes.DELETE_TOKEN_NOT_FOUND);
            }
            return _this.openDatabase_().then(function (db) {
                return new Promise(function (resolve, reject) {
                    var transaction = db.transaction([FCM_TOKEN_OBJ_STORE], 'readwrite');
                    var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                    var request = objectStore.delete(details['swScope']);
                    request.onerror = function (event) {
                        reject(event.target.error);
                    };
                    request.onsuccess = function (event) {
                        if (event.target.result === 0) {
                            reject(_this.errorFactory_.create(_errors3.default.codes.FAILED_TO_DELETE_TOKEN));
                            return;
                        }
                        resolve(details);
                    };
                });
            });
        });
    };
    return TokenManager;
}();
exports.default = TokenManager;
module.exports = exports['default'];
//# sourceMappingURL=token-manager.js.map


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (arrayBuffer) {
    var base64String = toBase64(arrayBuffer);
    return base64String.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
};

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function toBase64(arrayBuffer) {
    var uint8Version = new Uint8Array(arrayBuffer);
    return window.btoa(String.fromCharCode.apply(null, uint8Version));
}
;
module.exports = exports['default'];
//# sourceMappingURL=array-buffer-to-base64.js.map


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    path: '/firebase-messaging-sw.js',
    scope: '/firebase-cloud-messaging-push-scope'
};
module.exports = exports['default'];
//# sourceMappingURL=default-sw.js.map


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _controllerInterface = __webpack_require__(427);

var _controllerInterface2 = _interopRequireDefault(_controllerInterface);

var _errors = __webpack_require__(415);

var _errors2 = _interopRequireDefault(_errors);

var _workerPageMessage = __webpack_require__(430);

var _workerPageMessage2 = _interopRequireDefault(_workerPageMessage);

var _fcmDetails = __webpack_require__(428);

var _fcmDetails2 = _interopRequireDefault(_fcmDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var FCM_MSG = 'FCM_MSG';
var SWController = function (_super) {
    __extends(SWController, _super);
    function SWController(app) {
        var _this = _super.call(this, app) || this;
        self.addEventListener('push', function (e) {
            return _this.onPush_(e);
        }, false);
        self.addEventListener('pushsubscriptionchange', function (e) {
            return _this.onSubChange_(e);
        }, false);
        self.addEventListener('notificationclick', function (e) {
            return _this.onNotificationClick_(e);
        }, false);
        /**
         * @private
         * @type {function(Object)|null}
         */
        _this.bgMessageHandler_ = null;
        return _this;
    }
    /**
    * A handler for push events that shows notifications based on the content of
    * the payload.
    *
    * The payload must be a JSON-encoded Object with a `notification` key. The
    * value of the `notification` property will be used as the NotificationOptions
    * object passed to showNotification. Additionally, the `title` property of the
    * notification object will be used as the title.
    *
    * If there is no notification data in the payload then no notification will be
    * shown.
    * @private
    */
    SWController.prototype.onPush_ = function (event) {
        var _this = this;
        var msgPayload;
        try {
            msgPayload = event.data.json();
        } catch (err) {
            // Not JSON so not an FCM message
            return;
        }
        var handleMsgPromise = this.hasVisibleClients_().then(function (hasVisibleClients) {
            if (hasVisibleClients) {
                // Do not need to show a notification.
                if (msgPayload.notification || _this.bgMessageHandler_) {
                    // Send to page
                    return _this.sendMessageToWindowClients_(msgPayload);
                }
                return;
            }
            var notificationDetails = _this.getNotificationData_(msgPayload);
            if (notificationDetails) {
                var notificationTitle = notificationDetails.title || '';
                return self.registration.showNotification(notificationTitle, notificationDetails);
            } else if (_this.bgMessageHandler_) {
                return _this.bgMessageHandler_(msgPayload);
            }
        });
        event.waitUntil(handleMsgPromise);
    };
    /**
    * @private
    */
    SWController.prototype.onSubChange_ = function (event) {
        var _this = this;
        var promiseChain = this.getToken().then(function (token) {
            if (!token) {
                // We can't resubscribe if we don't have an FCM token for this scope.
                throw _this.errorFactory_.create(_errors2.default.codes.NO_FCM_TOKEN_FOR_RESUBSCRIBE);
            }
            var tokenDetails = null;
            var tokenManager = _this.getTokenManager();
            return tokenManager.getTokenDetailsFromToken(token).then(function (details) {
                tokenDetails = details;
                if (!tokenDetails) {
                    throw _this.errorFactory_.create(_errors2.default.codes.INVALID_SAVED_TOKEN);
                }
                // Attempt to get a new subscription
                return self.registration.pushManager.subscribe(_fcmDetails2.default.SUBSCRIPTION_OPTIONS);
            }).then(function (newSubscription) {
                // Send new subscription to FCM.
                return tokenManager.subscribeToFCM(tokenDetails.fcmSenderId, newSubscription, tokenDetails.fcmPushSet);
            }).catch(function (err) {
                // The best thing we can do is log this to the terminal so
                // developers might notice the error.
                return tokenManager.deleteToken(tokenDetails.fcmToken).then(function () {
                    throw _this.errorFactory_.create(_errors2.default.codes.UNABLE_TO_RESUBSCRIBE, {
                        message: err
                    });
                });
            });
        });
        event.waitUntil(promiseChain);
    };
    /**
    * @private
    */
    SWController.prototype.onNotificationClick_ = function (event) {
        var _this = this;
        if (!(event.notification && event.notification.data && event.notification.data[FCM_MSG])) {
            // Not an FCM notification, do nothing.
            return;
        }
        // Prevent other listeners from receiving the event
        event.stopImmediatePropagation();
        event.notification.close();
        var msgPayload = event.notification.data[FCM_MSG];
        var clickAction = msgPayload['notification']['click_action'];
        if (!clickAction) {
            // Nothing to do.
            return;
        }
        var promiseChain = this.getWindowClient_(clickAction).then(function (windowClient) {
            if (!windowClient) {
                // Unable to find window client so need to open one.
                return self.clients.openWindow(clickAction);
            }
            return windowClient;
        }).then(function (windowClient) {
            if (!windowClient) {
                // Window Client will not be returned if it's for a third party origin.
                return;
            }
            // Delete notification data from payload before sending to the page.
            var notificationData = msgPayload['notification'];
            delete msgPayload['notification'];
            var internalMsg = _workerPageMessage2.default.createNewMsg(_workerPageMessage2.default.TYPES_OF_MSG.NOTIFICATION_CLICKED, msgPayload);
            // Attempt to send a message to the client to handle the data
            // Is affected by: https://github.com/slightlyoff/ServiceWorker/issues/728
            return _this.attemptToMessageClient_(windowClient, internalMsg);
        });
        event.waitUntil(promiseChain);
    };
    /**
     * @private
     * @param {Object} msgPayload
     * @return {NotificationOptions|undefined}
     */
    SWController.prototype.getNotificationData_ = function (msgPayload) {
        if (!msgPayload) {
            return;
        }
        if (_typeof(msgPayload.notification) !== 'object') {
            return;
        }
        var notificationInformation = Object.assign({}, msgPayload.notification);
        // Put the message payload under FCM_MSG name so we can identify the
        // notification as being an FCM notification vs a notification from
        // somewhere else (i.e. normal web push or developer generated
        // notification).
        notificationInformation['data'] = (_a = {}, _a[FCM_MSG] = msgPayload, _a);
        return notificationInformation;
        var _a;
    };
    /**
     * Calling setBackgroundMessageHandler will opt in to some specific
     * behaviours.
     * 1.) If a notification doesn't need to be shown due to a window already
     * being visible, then push messages will be sent to the page.
     * 2.) If a notification needs to be shown, and the message contains no
     * notification data this method will be called
     * and the promise it returns will be passed to event.waitUntil.
     * If you do not set this callback then all push messages will let and the
     * developer can handle them in a their own 'push' event callback
     * @export
     * @param {function(Object)} callback The callback to be called when a push
     * message is received and a notification must be shown. The callback will
     * be given the data from the push message.
     */
    SWController.prototype.setBackgroundMessageHandler = function (callback) {
        if (callback && typeof callback !== 'function') {
            throw this.errorFactory_.create(_errors2.default.codes.BG_HANDLER_FUNCTION_EXPECTED);
        }
        this.bgMessageHandler_ = callback;
    };
    /**
     * @private
     * @param {string} url The URL to look for when focusing a client.
     * @return {Object} Returns an existing window client or a newly opened
     * WindowClient.
     */
    SWController.prototype.getWindowClient_ = function (url) {
        // Use URL to normalize the URL when comparing to windowClients.
        // This at least handles whether to include trailing slashes or not
        var parsedURL = new URL(url).href;
        return self.clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then(function (clientList) {
            var suitableClient = null;
            for (var i = 0; i < clientList.length; i++) {
                var parsedClientUrl = new URL(clientList[i].url).href;
                if (parsedClientUrl === parsedURL) {
                    suitableClient = clientList[i];
                    break;
                }
            }
            if (suitableClient) {
                suitableClient.focus();
                return suitableClient;
            }
        });
    };
    /**
     * This message will attempt to send the message to a window client.
     * @private
     * @param {Object} client The WindowClient to send the message to.
     * @param {Object} message The message to send to the client.
     * @returns {Promise} Returns a promise that resolves after sending the
     * message. This does not guarantee that the message was successfully
     * received.
     */
    SWController.prototype.attemptToMessageClient_ = function (client, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!client) {
                return reject(_this.errorFactory_.create(_errors2.default.codes.NO_WINDOW_CLIENT_TO_MSG));
            }
            client.postMessage(message);
            resolve();
        });
    };
    /**
     * @private
     * @returns {Promise<boolean>} If there is currently a visible WindowClient,
     * this method will resolve to true, otherwise false.
     */
    SWController.prototype.hasVisibleClients_ = function () {
        return self.clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then(function (clientList) {
            return clientList.some(function (client) {
                return client.visibilityState === 'visible';
            });
        });
    };
    /**
     * @private
     * @param {Object} msgPayload The data from the push event that should be sent
     * to all available pages.
     * @returns {Promise} Returns a promise that resolves once the message
     * has been sent to all WindowClients.
     */
    SWController.prototype.sendMessageToWindowClients_ = function (msgPayload) {
        var _this = this;
        return self.clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then(function (clientList) {
            var internalMsg = _workerPageMessage2.default.createNewMsg(_workerPageMessage2.default.TYPES_OF_MSG.PUSH_MSG_RECEIVED, msgPayload);
            return Promise.all(clientList.map(function (client) {
                return _this.attemptToMessageClient_(client, internalMsg);
            }));
        });
    };
    /**
     * This will register the default service worker and return the registration.
     * @private
     * @return {Promise<!ServiceWorkerRegistration>} The service worker
     * registration to be used for the push service.
     */
    SWController.prototype.getSWRegistration_ = function () {
        return Promise.resolve(self.registration);
    };
    return SWController;
}(_controllerInterface2.default);
exports.default = SWController;
module.exports = exports['default'];
//# sourceMappingURL=sw-controller.js.map


/***/ })

});
//# sourceMappingURL=0.js.map