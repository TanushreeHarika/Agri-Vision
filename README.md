# 🌱 Agri-Vision: Cotton Crop Analysis System

Agri-Vision is an AI-powered system that analyzes cotton crop images to determine growth stages and health conditions.  
It helps farmers and researchers make informed decisions about crop management and harvest timing.
<div align="center">

## 🌱 AI Crop Analysis Initialization

<img src="https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge&logo=openai&logoColor=white"/>
<img src="https://img.shields.io/badge/Crop-Analysis-22c55e?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Status-Active-0ea5e9?style=for-the-badge"/>

</div>


> 🚀 This module prepares the complete AI-powered crop analysis workflow by handling image preprocessing, initializing prediction models, and validating uploaded crop images before analysis.

<br>

<table align="center">
<tr>
<td width="50%">

### ⚙️ Core Responsibilities
- 📸 Image preprocessing
- 🧠 AI model initialization
- ✅ Crop image validation
- 🔍 Prediction workflow handling
- ⚡ Optimized processing pipeline

</td>

<td width="50%">

### 🌟 Future Enhancements
- 🌾 Multi-crop disease detection
- 📡 Real-time prediction rendering
- ☁️ Cloud-based AI integration
- 📱 Mobile performance optimization
- 🤖 Advanced deep learning support

</td>
</tr>
</table>

---

<div align="center">


</div>

##  📌 Overview

Agri-Vision uses deep learning and computer vision techniques to:

- Detect cotton growth phases  
- Identify cotton crop diseases  
- Provide confidence scores and actionable recommendations  
- Offer both a web interface and a REST API  

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Dataset Information](#-dataset-information)
- [Model Information](#-model-information)
- [Model Performance & Benchmarking](docs/model-benchmarking.md)
- [Project Structure](#-project-structure)
- [Setup & Execution](#-setup--execution)
- [API Reference](#️-api-reference)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)

---


## ✨ Features

- 🌿 **Growth Phase Detection** (Supported for cotton and 🍅 Tomato)
- 💚 **Health Assessment** (disease & damage detection)
- 🤖 **AI-Powered Analysis** using deep learning
- 🌐 **Web Interface** (Flask-based)
- 📊 **REST API Support** for programmatic access
- 🎯 **Smart Recommendations** for farmers
- ⚡ **Fast Processing** (< 2 seconds per image) 

---

## 🛠️ Tech Stack

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)
![Ultralytics](https://img.shields.io/badge/Ultralytics-111827?style=flat-square&logo=yolo&logoColor=white)

> Built using modern AI, deep learning, and computer vision technologies for precision agriculture.

---

## Dataset Information
---
### For Cotton Crop
The datasets used for training the Growth Stage Prediction and Crop Disease Classification models were sourced from Roboflow.

### Growth Stage Prediction Dataset (For cotton crop)  

https://universe.roboflow.com/p-project-ebvkg/cotton-boll-growth-detection/dataset/5  

*The above dataset is also having appropriate labels for YOLO model training

### Crop Disease Classification Dataset (for cotton crop)  

https://universe.roboflow.com/deep-learning-nygzt/tomato-crop-diseases

## Growth Phases Detected

- Cotton Blossom
- Cotton Bud
- Early Boll
- Matured Cotton Boll
- Split Cotton Boll



## Health Issues Identified

- Healthy
- Aphids
- Army Worm
- Bacterial Blight
- Cotton Boll Rot
- Green Cotton Boll
- Powdery mildew
- Target spot

---
### For Tomato Crop
The datasets used for training the Growth Stage Prediction and Crop Disease Classification models were sourced from Roboflow.

### Growth Stage Prediction Dataset (For tomato crop)  

https://www.kaggle.com/datasets/arjunsudheer326/tomato-plant-stages-dataset


### Crop Disease Classification Dataset (for tomato crop)  

https://universe.roboflow.com/deep-learning-nygzt/tomato-crop-diseases
## Growth Phases Detected

- Early Vegetative
- Flowering initiation



## Health Issues Identified

- Early Blight
- Healthy
- Late blight
- Leaf miner
- Leaf mold
- Mosaic virus
- Septoria
- Spider mites
- Yellow leaf curl virus

---
## For Potato Crop
The datasets used for training the potato disease classification model were taken from kaggle

## Crop disease dataset (for potato)
https://www.kaggle.com/datasets/faysalmiah1721758/potato-dataset

## Health Issues Identified
- Early Blight
- Late Blight
- Healthy Leaf

## setup 
Download the dataset from the given URL and make sure to split the it into training data, testing data and validation data.
---

## Environment
The app requires a strong `SECRET_KEY` when running in production. This key signs session cookies and other secrets — keep it private.

To generate a key:

```
python -c "import secrets; print(secrets.token_urlsafe(64))"
```

Create a `.env` file in the project root and add at least:

```
SECRET_KEY=your-generated-secret
OPENWEATHER_API_KEY=your-openweather-key
```

Run the app in production mode locally:

```
export SECRET_KEY="$(python -c 'import secrets; print(secrets.token_urlsafe(64))')"
export FLASK_ENV=production
python -m flask run --host=0.0.0.0 --port=5000
```

During development the app will create a temporary key if `SECRET_KEY` is not set — do not use that value in production.

---
# 🤖 Model Information
<!-- --- -->
## For cotton crop
## Growth Stage Prediction Model
Model Used - YOLOv8   

Parameters - ~3M  

Layers - 73  


## Crop Disease Classification Model
Model Used - ResNet50  

Parameters - 25.6M

### Grad-CAM Explainability
Successful cotton disease classifications can include a Grad-CAM heatmap overlay generated from the final ResNet50 convolutional block (`layer4[-1]`). Generated visualizations are saved under `static/generated/gradcam/` and surfaced in the results page and API responses when available.


# 📊 Model Results
Check training curves and result snapshots inside the `results/` directory.
For confusion matrices, benchmark tables, and reproducibility notes, see [Model Performance & Benchmarking](docs/model-benchmarking.md).

## Metrics for YOLOv8 (Growth Stage Prediction)
mAP50 - 60.06%  

mAP95 - 34.8%  

R - 53.8%  

P - 62.7%  

Inference Time - 3.3ms  



## Metrics for ResNet50 (Cotton Crop Disease Classification)
Accuracy - 99.83%  

Precision - 99.83%  

Recall - 99.83%  

F1 Score - 99.83%  

ROC AUC - 99.98%  


---
## For tomato crop
## Growth Stage Prediction Model
Model Used - YOLOv8   

Parameters - ~3M  

Layers - 73  


## Crop Disease Classification Model
Model Used - ResNet50  

Parameters - 25.6M

# 📊 Model Results
Check training curves and result snapshots inside the `results/` directory.

## Metrics for YOLOv8 (Tomato crop disease prediction)
mAP50 - 95.4%  

mAP95 - 86.2%  

R - 88.5%  

P - 92.3%  

Inference Time - 1.3ms  



## Metrics for ResNet50 (Cotton Crop growth stage prediction)
Accuracy - 100%

Precision - 100% 

Recall - 100% 

F1 Score - 100%  

 
---


## 📁 Project Structure

```tree
Agri-Vision/
│
├── app/
│   ├── __init__.py
│   │
│   ├── routes/
│   │   ├── auth.py
│   │   ├── admin.py
│   │   ├── dashboard.py
│   │   ├── disease.py
│   │   ├── reports.py
│   │   ├── weather.py
│   │   └── yield_prediction.py
│   │
│   ├── services/
│   │   ├── disease_prediction_service.py
│   │   ├── recommendation_engine.py
│   │   ├── report_service.py
│   │   ├── weather_service.py
│   │   ├── yield_service.py
│   │   ├── image_quality.py
│   │   └── gradcam.py
│   │
│   ├── database/
│   │   └── models.py
│   │
│   ├── templates/
│   └── static/
│
├── ai_models/
│   ├── cotton/
│   ├── potato/
│   ├── tomato/
│   └── growth_stage/
│
├── training/
│   ├── notebooks/
│   │   ├── cotton_crop_disease_prediction.ipynb
│   │   ├── potato_crop_disease_classification.ipynb
│   │   ├── tomato_crop_disease_classification.ipynb
│   │   ├── tomato_growth_stages_classification.ipynb
│   │   └── cotton_growth_stage_prediction.ipynb
│   │
│   ├── train.py
│   ├── model_config.json
│   └── model_registry.py
│
├── database/
│   ├── create_admin.py
│   ├── add_sample_data.py
│   ├── populate_disease_data.py
│   └── populate_historical_data.py
│
├── tasks/
│   ├── celery_tasks.py
│   └── celery_worker.py
│
├── results/
│   ├── cotton/
│   ├── potato/
│   ├── tomato/
│   └── growth_stage/
│
├── docs/
│   ├── architecture.md
│   ├── MODEL_VERSIONING.md
│   ├── PDF_FEATURE_INTEGRATION.md
│   ├── PDF_IMPLEMENTATION_SUMMARY.md
│   ├── PDF_QUICK_START.md
│   ├── security.md
│   ├── model-benchmarking.md
│   └── api-documentation.md
│
├── deployment/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── nginx.conf
│   └── runtime.txt
│
├── tools/
│   ├── check_quotes.py
│   ├── check_tags.py
│   ├── count_brackets.py
│   └── find_unmatched.py
│
├── tests/
│   ├── test_admin_auth.py
│   ├── test_app.py
│   ├── test_config.py
│   ├── test_explain.py
│   ├── test_recommendations.py
│   ├── test_weather.py
│   └── test_yield.py
│
├── client/
├── .github/
│
├── run.py
├── requirements.txt
├── requirements_minimal.txt
├── requirements_no_versions.txt
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── Code_Of_Conduct.md
├── .env.example
├── .gitignore
└── pytest.ini
```

---

# 🚀 Setup & Execution

There are two ways to run this project: using Docker (Recommended) or setting it up locally with Python.

## 🐳 Option A: Run with Docker (Recommended)
Using Docker is the easiest way to run Agri-Vision as it avoids system dependency issues and automatically sets up the environment.

1. Ensure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed.
2. Clone the repository and navigate into it:
   ```bash
  git clone <https://github.com/neeru24/Agri-Vision>
  cd <Agri-Vision>
  ### Create Virtual Environment

```bash
python -m venv venv


Be careful with the markdown formatting/backticks.


### Activate Virtual Environment

For Windows:

```bash
venv\Scripts\activate
```

For macOS/Linux:

```bash
source venv/bin/activate
```
   ```

   ### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run the Flask App

```bash
python app.py
```
### Open in Browser

```txt
http://127.0.0.1:5000/
```

3. Build and start the container:
   ```bash
   docker-compose up --build
   ```
4. Access the web interface at `http://localhost:5000`.

---

## 🐍 Option B: Local Python Setup

If you prefer to run the project natively using Python (requires Python 3.8+):

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/neeru24/Agri-Vision.git
cd Agri-Vision
```

### 2️⃣ Create and Activate a Virtual Environment

#### macOS/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

#### Windows

```bash
python -m venv venv
venv\Scripts\activate
```


### 3️⃣ Create a `.env` File

Create a `.env` file in the project root and add a `SECRET_KEY` entry.

This value is required in production—the app will not start without it. To generate a secure key locally, run:

```bash
python -c 'import secrets; print(secrets.token_urlsafe(64))'
```

Then add the generated value to `.env`:

```env
SECRET_KEY=your_generated_secret_here
```

### 4️⃣ Install Python Dependencies

Install all the required Python packages using:

```bash
pip install -r requirements.txt
```

### 5️⃣ Run the Project

Start the application explicitly by running:

```bash
python app.py
```

### ✅ Setup Complete

The project should now be running successfully on your local machine at `http://localhost:5000`.

---

## 🧪 Running Unit Tests & Coverage

Agri-Vision includes a comprehensive unit and integration testing suite built using `pytest` and `pytest-cov`. 

The test suite runs programmatically in-memory, requiring no external files or slow deep learning model loading. This ensures tests run in **less than 1 second** with **89%+ code coverage**.

### 1️⃣ Run Unit Tests & Coverage (Simultaneously)

Thanks to the pre-configured `pytest.ini`, you don't need to pass long command line arguments. Running a single command will execute all 28 tests, generate verbose progress, check code coverage, and produce an HTML report automatically:

```bash
python -m pytest
```

**Expected Output:**
```text
tests/test_app.py::test_preprocess_image_for_resnet PASSED               [  3%]
tests/test_app.py::test_infer_disease_fallback PASSED                    [  7%]
...
tests/test_app.py::test_post_api_analyze_exception PASSED                [100%]

=============================== tests coverage ================================
Name      Stmts   Miss  Cover   Missing
--------------------------------------
app.py     201     22    89%   81-83, 88-90, 159, 406-420
--------------------------------------
TOTAL      201     22    89%

Coverage HTML written to dir htmlcov
============================= 28 passed in 1.06s ==============================
```

### 2️⃣ View Interactive HTML Coverage report

When you run the tests, a beautiful interactive HTML coverage report is automatically created in the `htmlcov/` directory.

To visually inspect which lines are covered (in green) and which are missed (in red) line-by-line:
1. Open the folder `htmlcov/` in your file explorer.
2. Double-click `index.html` to open it in any web browser.
3. Click on `app.py` to view the beautiful interactive code visualization.

### 3️⃣ Automated Continuous Integration (CI)

A GitHub Actions workflow is fully set up. It will automatically run your entire unit test suite and verify code quality/coverage metrics on every single `push` or `pull_request` to the `main` branch.

---



# 🛠️ API Reference

## Analyze Image (POST Request)

```bash
curl -X POST -F "file=@cotton_image.jpg" http://localhost:5000/api/analyze
```

---

## 📦 Response Format (JSON)

```json
{
  "status": "success",
  "analysis": {
    "stage": "Bursting (Ripped)",
    "stage_confidence": 0.87,
    "health_status": "Pink Bollworm Damage",
    "health_confidence": 0.76,
    "health_score": 68.5,
    "is_ripped": true,
    "has_damage": true
  },
  "recommendations": ["..."]
}
```

---

# 🎯 Usage

## 🌐 Web Interface

1. Go to `/analyze`
2. Upload a cotton crop image
3. View detailed analysis results
4. Download the JSON report if needed

---



# 🚀 Future Enhancements

- 📱 Mobile application support  
- 🎥 Real-time video analysis  
- 🌾 Multi-crop support (Cotton, Tomato, and Potato fully integrated)
- ☁️ Weather data integration  
- 📊 Yield prediction system  
- 🧠 Improved AI models
---

# 🤝 Contributing

Contributions are welcome to improve Agri-Vision and make it more useful for farmers, researchers, and developers.

Feel free to:

- Fork the repository  
- Create a feature branch  
- Submit a pull request  

---

## 📝 Additional Notes

- Follow the project structure and coding style.
- Avoid spam or duplicate PRs/issues.
- Be respectful during code reviews and discussions.
- Beginners are welcome — feel free to ask questions if stuck ✨

---

# 📜 License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for more details.

---

# 🙌 Acknowledgements

Special thanks to:

- TensorFlow  
- Flask  
- OpenCV  
- Open-source contributors  
- Agricultural research datasets  
- Ultralytics
- PyTorch

---

<div align="center">

## ❤️ Made with Passion by [neeru24](https://github.com/neeru24)

⭐ If you found this project helpful, consider giving it a star. ⭐

</div>
